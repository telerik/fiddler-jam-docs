---
title: Security
description: Security details and related technical information about the Fiddler Jam sharing and capturing functionalities.
slug: fj-security
publish: true
position: 90
---


## Fiddler Jam Security

Fiddler Jam Extension is a Chrome extension tool that can capture the ongoing tab activity and generate links with the captured activity logs. With such functionality, a particular set of security features is added to Fiddler Jam to protect users' privacy and allow them to share logs with sensitive information entirely stripped.  Here are the must-know highlights when capturing and sharing Fiddler Jam logs.

- When Fiddler Jam Extension starts capturing, a red dot will indicate the ongoing recording.
- When Fiddler Jam Extension is [explicitly set to capture a video]({%slug fj-capture-options%}#capture-video), a screen capturing icon in the recorded tab will indicate the ongoing recording.
- If either [**Capture screenshots**]({%slug fj-capture-options%}#take-screenshots-while-capturing) or [**Capture Video**]({%slug fj-capture-options%}#capture-video) options are enabled, a privacy warning appears in Fiddler Jam Extension before the recording starts.

    ![Fiddler Jam screenshot and video warning](./images/ext/ext-images/extension-start-capturing-warning.png)
- Fiddler Jam Extension captures the Chrome tab's content where capturing is initialized plus all tabs and windows opened from that particular tab (and all tabs and windows opened from them). All tabs and windows with active capturing will have the red dot indication in Fiddler Jam Extension, as well as a strip at the top of the page with the text "Fiddler Jam, started debugging this browser". If the red dot in Fiddler Jam Extension and the top page strip the top of the page with the text "Fiddler Jam started debugging this browser" is not visible, Fiddler Jam Extension is not capturing this browser tab.
- By default (**Mask all post data** switched off), Fiddler Jam Extension will try to mask all sensitive data (when the information is in known formats) send to the server or received from the server to the browser. Data sent or received in an unknown format will be considered sensitive by default and masked at 100%. Fiddler Jam Extension will remove masked data from the captured logs, and no one will be able to read it. Switching  **Mask all post data** will explicitly turn on masking all data sent to the server. Learn more about [the sensitive data masking and the known formats](#masking-sensitive-data). 
- By default Fiddler Jam Extension will mask cookies values (see the [**Advanced Options**](#advanced-options) below). This means that this data will be removed from the captured log, and no one will be able to read it.
- The password-protected logs are client-side encrypted with AES-CTR, and the password is not stored on Fiddler Jam servers.
- The Fiddler Jam team doesn't have access to and can't recover password-protected log content. Learn more about the password-protecting option in the [Sharing Links options]({%slug fj-link-options%}). 
- The Fiddler Jam logs are stored in cloud storage based in the US, North Virginia.
- By default, the Fiddler Jam portal is collecting usage statistics data. Learn more about how to enable and disable the collection of usage data via the [Privacy settings]({%slug fj-portal%}#privacy-settings) 


## Masking Sensitive Data

By default, the Fiddler Jam Extension will start capturing with the advanced option [**Mask all post data**]({%slug fj-capture-options%}#mask-all-post-data) switched **off**. Fiddler Jam Extension will try to automatically mask (remove) all sensitive data sent to or received from the server contained in one of the following known formats (MIME types):

- **application/json**
- **application/xml**
- **application/x-www-form-urlencoded**
- **multipart/form-data**
- any that match __application/*__ and have either the word **json**, **xml** or **x-www-form-urlencoded** on the right side
- any that match __text/*__ and have either the word **json**, **xml** or **x-www-form-urlencoded** on the right side

For XHR request that returns data in other unsupported MIME types, the content is fully masked (removed). 
For all non-XHR request that returns data in other unsupported MIME types, the content is not modified and left as is. 

When the advanced option [**Mask all post data**]({%slug fj-capture-options%}#mask-all-post-data) is switched **on**, all post data (including the known formats listed above) is fully masked (removed).

### What is Sensitive Data

Fiddler Jam considers the following as sensitive data:

1. Data where the **property name** is tested for keywords that can contain potentially sensitive data such as: **RSA, dsa, ed25519, ecdsa, private, key, pass, pwd, secret, credential, token, ssh, api, key, auth, card, credit, debit, MasterCard, visa, discover, diners, American.?express, Amex, carte, karte, Carta, atm, Tarjeta, CVV, cc, verification, security, transaction, Sicherheit, Sicurezza, seguranca, securite**.

2. Post data where the **property value** is tested against regex expressions for known credentials, keys or credit cards including:
    - Slack Token RSA private key SSH (DSA) private key
    - SSH (EC) private key
    - PGP private key block
    - AWS Access Key ID
    - Amazon MWS Auth Token
    - AWS AppSync GraphQL Key 
    - Facebook Access Token
    - Facebook OAuth
    - GitHubToken
    - Generic API Key 
    - Generic Secret
    - Google API Key
    - Google Cloud Platform OAuth
    - Google Drive API Key 
    - Google Drive OAuth
    - Google Gmail API Key
    - Google YouTube API Key
    - Google YouTube OAuth
    - MailChimp API Key 
    - Mailgun API Key* Password in URL
    - PayPal Braintree Access Token 
    - Slack Webhook
    - Stripe API Key
    - Stripe Restricted API Key* Square Access Token
    - Square OAuth Secret
    - Teleниgram Bot API Key
    - Twilio API Key
    - Twitter Access Token
    - Twitter OAuth
    - Master Card
    - American Express 
    - Visa Credit card
    - Discover Credit Card  
    - Maestro Credit Card 
    - JCB Credit Card
    - Diner's Club Credit Card 
    - Amex card  
    - BCGlobal card 
    - Carte Blanche Card 
    - Insta Payment Card  
    - Korean Local Card 
    - Laser card 
    - Solo card 
    - Switch card 
    - Union pay card
    - Vista master card 
    - Rupay Debit Card 


3. The following HTTP headers also get masked:
    - Authorization
    - WWW-Authenticate
    - Proxy-Authorization
    - Proxy-Authenticate

## Advanced Options

The [**Advanced Options**]({%slug fj-capture-options%}) menu provides some valuable options that Fiddler Jam Extension applies during the capturing. Before you record a log, consider the following security concerns:

- **Capture video** - When active, this option creates a screencast of the user interactions from the **initial** browser tab (no video recording from tabs opened additionally). This option is turned on by default.
- **Capture screenshots** - This option will add a screenshot of your actions from the active Chrome tab. Before you record a log, consider disabling the screenshot option if your screen shows sensitive data. This option is turned on by default.
- **Capture console** - When active, this option includes any developer's console outputs in the recorded log. **Turned ON by default**.
- **Capture storage info** - This option captures local/session storage data from each inspected tab. This option is turned on by default.
- **Mask cookies** - When active, this option masks all cookies' values (cookie key names are still readable!) so that they won't be visible to the portal users receiving the log. This option is turned on by default.
- **Mask all post data** - When active, this option masks all the POST data (for example, user's information in text inputs and forms). Even when this option is turned off, a default [masking of sensitive data](#masking-sensitive-data) will apply.
- **Disable cache** - This option sets the `Cache-Control` and `Pragma` headers to **no-cache** value on each network request. This option is turned on by default.


As a security rule of thumb, you should always check if **Capture screenshots** and **Capture video** options are enabled/disabled as per requirements. When those options are enabled, sensitive data might be exposed even if masked in the captured HTTP sessions, so take extra care while sharing these logs with third parties. 

## Sharing Links

Once Fiddler Jam Extension [records a log]({%slug fj-recording-logs%}), it generates a unique link and distributes them as HAR files.

- For logs generated with **Share as link** option:  Any [Fiddler Jam portal users]({%slug fj-portal%}) could open the link.
- For logs generated with **Share with specific people** options:  Only [Fiddler Jam portal users]({%slug fj-portal%}) included explicitly in the share list will be able to open the link.
- For logs generated with **Password protection** option: Only [Fiddler Jam portal users]({%slug fj-portal%}) with the knowledge of the password can open the link. Fiddler Jam Extension distributes the logs as HAR files encrypted with the AES-CTR encryption algorithm.
