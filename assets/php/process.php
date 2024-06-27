<?php
require 'vendor/autoload.php';

use MailchimpMarketing\ApiClient;
use QuickBooksOnline\API\DataService\DataService;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $package = $_POST['package'];
    $cardNumber = $_POST['cardNumber'];
    $expiryDate = $_POST['expiryDate'];
    $cvv = $_POST['cvv'];

    // Initialize Mailchimp API
    $mailchimp = new ApiClient();
    $mailchimp->setConfig([
        'apiKey' => 'f0c612a64590fa2bd5fbc2266d0a61d2-us14',
        'server' => 'us14' // e.g., 'us1'
    ]);

    $listId = 'a73b73b5b8';

    try {
        $mailchimp->lists->addListMember($listId, [
            "email_address" => $email,
            "status" => "subscribed",
            "merge_fields" => [
                "FNAME" => $name,
                "ADDRESS" => $address,
                "PACKAGE" => $package,
            ]
        ]);

        echo 'Subscription successful!';
    } catch (Exception $e) {
        echo 'Subscription failed: ' . $e->getMessage();
        exit();
    }

    // Initialize QuickBooks API
    $dataService = DataService::Configure([
        'auth_mode' => 'oauth2',
        'ClientID' => "your_client_id",
        'ClientSecret' => "your_client_secret",
        'RedirectURI' => "your_redirect_uri",
        'scope' => "com.intuit.quickbooks.payment",
        'baseUrl' => "Development"
    ]);

    $accessToken = $dataService->getOAuth2LoginHelper()->exchangeAuthorizationCodeForToken('auth_code', 'realm_id');
    $dataService->updateOAuth2Token($accessToken);

    $customer = [
        "DisplayName" => $name,
        "PrimaryEmailAddr" => [
            "Address" => $email
        ],
        "PrimaryPhone" => [
            "FreeFormNumber" => $phone
        ],
        "BillAddr" => [
            "Line1" => $address,
        ],
    ];

    $customerObj = $dataService->Add('Customer', $customer);

    $payment = [
        "CustomerRef" => [
            "value" => $customerObj->Id
        ],
        "TotalAmt" => $package,
        "Line" => [
            [
                "Amount" => $package,
                "DetailType" => "SalesItemLineDetail",
                "SalesItemLineDetail" => [
                    "ItemRef" => [
                        "value" => "1"
                    ]
                ]
            ]
        ],
        "CreditCardPayment" => [
            "CCNumber" => $cardNumber,
            "ExpirationDate" => $expiryDate,
            "Amount" => $package
        ]
    ];

    $paymentObj = $dataService->Add('Payment', $payment);

    if ($paymentObj) {
        echo "Payment successful!";
    } else {
        echo "Payment failed!";
    }
}
?>
