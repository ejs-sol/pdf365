---
title: "Getting started"
---

# Getting started

## Starting the VMs

*pdf365* is available as VM images (BYOL). First you have to start the VMs:

### Azure

Instantiate *pdf365* on the Azure Marketplace.

### Google Cloud / AWS / Docker

We will introduce *pdf365* there soon as well, stay tuned.


## Configuration

No configuration is needed for the service itself — *pdf365* is designed to work right out of the box. However, you might want to fine-tune some options to better fit your workflows, such as setting default fonts, margins, or output formats. These can be controlled via the API directly.

### Security

Ensuring your instance is secure is critical. By default, *pdf365* does expose its API publicly. We just do not know what kind of authentication & authorization are you using - the possibilities are endless. We are sure you have a great working system in place, and we don't want to bother you with implementing yet another one, just because we've chosen it. 
There are endless possibilities how to integrate *pdf365* into your security solutions. Here are some recommendations and ideas:

- Restrict Public Internet Access:

    - Configure your VM’s firewall rules to allow traffic only from trusted IP ranges.

    - Consider setting up a VPN or private network for secure communication.

- API Security:

    - Implement API management on your cloud provider to throttle requests and ensure only authorized services or users can call the API.

    - If your cloud supports managed API gateways (e.g., Azure API Management), route traffic through it for enhanced logging and access control.

- Authentication:

    - Integrate API key or token-based authentication to restrict usage.
    - Ensure secure transmission with enforced HTTPS.

- System updates:

    - Regularly update the VM image or underlying OS to ensure the latest security patches are applied.

Following these recommendations ensures your *pdf365* service is both resilient and secure, safeguarding sensitive document processing operations.
