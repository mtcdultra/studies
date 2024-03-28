# AZ-900

---

https://learn.microsoft.com/en-us/credentials/certifications/exams/az-900/

https://certstest.com/test/az-900

---

| AZ-900 Domain Area                       | Weight |
| ---------------------------------------- | ------ |
| Describe cloud concepts                  | 25-30% |
| Describe Azure architecture and services | 35-40% |
| Describe Azure management and governance | 30-35% |
| Exame length                             | 85 min |
| Questions                                | 35-45  |
| Points to approve                        | 700    |

---

1. Microsoft Azure Fundamentals: Describe cloud concepts
   1. Describe cloud computing
      1. [x] Introduction to Microsoft Azure Fundamentals
      2. [x] Introduction to cloud computing
      3. [x] What is cloud computing
      4. [x] Describe the shared responsibility model
      5. [x] Define cloud models
      6. [x] Describe the consumption-based model
      7. [x] Knowledge check
      8. [x] Summary
   2. Describe the benefits of using cloud services (17min - 7 units)
      1. [x] Introduction
      2. [x] Describe the benefits of high availability and scalability in the cloud
      3. [x] Describe the benefits of reliability and predictability in the cloud
      4. [x] Describe the benefits of security and governance in the cloud
      5. [x] Describe the benefits of manageability in the cloud
      6. [x] Knowledge check
      7. [x] Summary
   3. Describe cloud service types (12min - 6 units)
      1. [x] Introduction
      2. [x] Describe Infrastructure as a Service
      3. [x] Describe Platform as a Service
      4. [x] Describe Software as a Service
      5. [x] Knowledge check
      6. [x] Summary
2. Microsoft Azure Fundamentals: Describe Azure architecture and services
   1. Describe the core architectural components of Azure (48min - 9 units)
      1. [x] Introduction
      2. [x] What is Microsoft Azure
      3. [x] Get started with Azure accounts
      4. [x] Exercise - Explore the Learn sandbox
      5. [x] Describe Azure physical infrastructure
      6. [x] Describe Azure management infrastructure
      7. [x] Exercise - Create an Azure resource
      8. [x] Knowledge check
      9. [x] Summary
   2. Describe Azure compute and networking services (1h8min - 14 units)
      1. [x] Introduction
      2. [x] Describe Azure virtual machines
      3. [x] Exercise - Create an Azure virtual machine
      4. [x] Describe Azure virtual desktop
      5. [x] Describe Azure containers
      6. [x] Describe Azure functions
      7. [x] Describe application hosting options
      8. [x] Describe Azure virtual networking
      9. [x] Exercise - Configure network access
      10. [x] Describe Azure virtual private networks
      11. [x] Describe Azure ExpressRoute
      12. [x] Describe Azure DNS
      13. [x] Knowledge check
      14. [x] Summary
   3. Describe Azure storage services (46min - 9 units)
      1. [x] Introduction
      2. [x] Describe Azure storage accounts
      3. [x] Describe Azure storage redundancy
      4. [x] Describe Azure storage services
      5. [x] Exercise - Create a storage blob
      6. [x] Identify Azure data migration options
      7. [x] Identify Azure file movement options
      8. [x] Knowledge check
      9. [x] Summary
   4. Describe Azure identity, access, and security (43min - 11 units)
      1. [x] Introduction
      2. [x] Describe Azure directory services
      3. [x] Describe Azure authentication methods
      4. [x] Describe Azure external identities
      5. [x] Describe Azure conditional access
      6. [x] Describe Azure role-based access control
      7. [x] Describe zero trust model
      8. [x] Describe defense-in-depth
      9. [x] Describe Microsoft Defender for Cloud
      10. [x] Knowledge check
      11. [x] Summary
3. Microsoft Azure Fundamentals: Describe Azure management and governance (1h52)
   1. Describe cost management in Azure (43min - 9 units)
      1. [x] Introduction
      2. [x] Describe factors that can affect costs in Azure
      3. [x] Compare the Pricing and Total Cost of Ownership calculators
      4. [x] Exercise - Estimate workload costs by using the Pricing calculator
      5. [x] Exercise - Compare workload costs using the TCO calculator
      6. [x] Describe the Microsoft Cost Management tool
      7. [x] Describe the purpose of tags
      8. [x] Knowledge check
      9. [x] Summary
   2. Describe features and tools in Azure for governance and compliance (34min - 8 units)
      1. [x] Introduction
      2. [x] Describe the purpose of Microsoft Purview
      3. [x] Describe the purpose of Azure Policy
      4. [x] Describe the purpose of resource locks
      5. [x] Exercise - Configure a resource lock
      6. [x] Describe the purpose of the Service Trust portal
      7. [x] Knowledge Check
      8. [x] Summary
   3. Describe features and tools for managing and deploying Azure resources (22min - 6 units)
      1. [x] Introduction
      2. [x] Describe tools for interacting with Azure
      3. [x] Describe the purpose of Azure Arc
      4. [x] Describe Azure Resource Manager and Azure ARM templates
      5. [x] Knowledge check
      6. [x] Summary
   4. Describe monitoring tools in Azure (13min - 6 units)
      1. [x] Introduction
      2. [x] Describe the purpose of Azure Advisor
      3. [x] Describe Azure Service Health
      4. [x] Describe Azure Monitor
      5. [x] Knowledge check
      6. [x] Summary

---

## 1 - Microsoft Azure Fundamentals: Describe cloud concepts

Azure Fundamentals is a series of three learning paths that familiarize you with Azure and its many services and features.

- Cloud computing platform
- Provides a wealth of cloud-based services like remote storage, database hosting, and centralized account management
- Offers new capabilities like artificial intelligence (AI) and Internet of Things (IoT) focused services
- Supports running fully virtualized computers managing your custom software solution

**Support plans**

- Basic (no support) / 10Gb storage
- Developer (support only business hours by email)
- Standard (full support) / 50Gb storage
- Professional Direct (full support)

### 1.1 Describe cloud computing

Concepts od responsibility, different cloud models and explore the unique pricing method for the cloud.

#### What is cloud computing

Is the delivery of computing services over the internet. Include:

- Virtual machines
- Storage
- Databases
- Networking
- Internet of Things (IoT)
- Machine learning (ML)
- Artificial intelligence (AI).

Shared responsibility model: responsibilities get shared between the cloud provider and the consumer.

- Physical security, power, cooling, and network connectivity are the _responsibility of the cloud provider_.
- The consumer is responsible for the data and information stored in the cloud, also responsible for access security, meaning you only give access to those who need it.

##### Cloud service types:

- **Infrastructure as a service** (**IaaS**)
  - IaaS places the **most responsibility on the consumer**, with the cloud provider being responsible for the basics of physical security, power, and connectivity.
- **Platform as a service** (**PaaS**)
  - PaaS, being a middle ground between IaaS and SaaS, rests somewhere in the middle and evenly distributes **responsibility between the cloud provider and the consumer**.
- **Software as a service** (**SaaS**)
  - SaaS places **most of the responsibility with the cloud provider**.

##### Cloud models:

Define the deployment type of cloud resources

- **Private cloud**
  - Used by single entity
  - Provides much greater control for the company and its IT department
  - Comes with greater cost and fewer of the benefits of a public cloud deployment
  - May be hosted from your on site datacenter. It may also be hosted in a dedicated datacenter offsite, potentially even by a third party that has dedicated that datacenter to your company
- **Public cloud (AWS, Azure, GCP...)**
  - Is built, controlled, and maintained by a third-party cloud provider
  - Anyone that wants to purchase cloud services can access and use resources
  - The general public availability is a key difference between public and private clouds
- **Hybrid cloud**
  - Can be used to allow a private cloud to surge for increased, temporary demand by deploying public cloud resources.
- **Multi-cloud**
  - Used multiple public cloud providers
  - In a multi-cloud environment you deal with two (or more) public cloud providers and manage resources and security in both environments.

**_Azure Arc_**: set of technologies that helps manage your cloud environment.
**_Azure VMware Solution_**: lets you run your VMware workloads in Azure with seamless integration and scalability.

##### Consumption-based model

When comparing IT infrastructure models, there are two types of expenses to consider. **Capital expenditure** (CapEx) and **operational expenditure** (OpEx).

- **Examples CapEx**: new building, repaving the parking lot, building a datacenter, or buying a company vehicle
- **Examples OpEx**: spending money on services or products over time. Renting a convention center, leasing a company vehicle, or signing up for cloud services

**Benefits of consumption-based model**:

- No upfront costs.
- No need to purchase and manage costly infrastructure that users might not use to its fullest potential.
- The ability to pay for more resources when they're needed.
- The ability to stop paying for resources that are no longer needed.

Cloud pricing models (Is a way to rent compute power and storage from someone else’s datacenter.)

- Pay only for the cloud services you use:
  - Plan and manage your operating costs.
  - Run your infrastructure more efficiently.
  - Scale as your business needs change.

### 1.2 Describe the benefits of using cloud services

- **High Availability**
- **Scalability**
- **Reliability**
- **Predictability**
- **Security**
- **Governance**
- **Elasticity**
- **Manageability**

#### Benefits of high availability and scalability

- When building or deploying a cloud application, two of the biggest considerations are uptime (or **availability**) and the ability to handle demand (or **scale**).
- **SLA** (service-level agreement): agreement between a service provider and costumer (service time).
- **Availability** focuses on ensuring maximum availability, regardless of disruptions or events that may occur.
- **Scalability** refers to the ability to adjust resources to meet demand.
  - Scaling generally comes in two varieties: vertical and horizontal.
    - _Vertical_ scaling is focused on increasing or decreasing the **capabilities of resources**.
      - Add more CPUs or RAM
    - _Horizontal_ scaling is adding or subtracting the **number of resources**
      - Add additional virtual machines or containers

#### Benefits of reliability and predictability

- **Reliability (fail)** is the ability of a system to recover from failures and continue to function.
- **Predictability** in the cloud lets you move forward with confidence. Predictability can be focused on performance predictability or cost predictability.
  - **Performance** predictability focuses on predicting the resources needed to deliver a positive experience for your customers. Autoscaling, load balancing, and high availability are just some of the cloud concepts that support performance predictability.
  - **Cost** predictability is focused on predicting or forecasting the cost of the cloud spend. Can even use tools like the **Total Cost of Ownership (TCO)** or **Pricing Calculator** to get an estimate of potential cloud spend.

#### Benefits of security and governance

- **Governance**
  - Cloud features support governance and compliance.
  - Cloud-based auditing helps flag any resource that’s out of compliance with your corporate standards and provides mitigation strategies.
- **Security**
  - Cloud providers are typically well suited to handle things like distributed denial of service (DDoS) attacks, making your network more robust and secure.
  - If you want **patches and maintenance taken care of automatically**, **PaaS and SaaS** are best
  - If you want **maximum control of security**, **IaaS** is best

#### Benefits of manageability

There are two types of manageability for cloud computing:

- Management of the cloud (managing your cloud resources)
  - Automatically scale resource deployment based on need.
  - Deploy resources based on a preconfigured template, removing the need for manual configuration.
  - Monitor the health of resources and automatically replace failing resources.
  - Receive automatic alerts based on configured metrics, so you’re aware of performance in real time.
- Management in the cloud (how you’re able to manage your cloud environment and resources)
  - Through a web portal.
  - Using a command line interface.
  - Using APIs.
  - Using PowerShell.

### 1.3 Describe cloud service types

#### Infrastructure as a Service (IaaS)

- The most flexible category of cloud service
- With IaaS, you’re essentially renting the hardware in a cloud datacenter, but what you do with that hardware is up to you.
- The cloud provider is responsible for maintaining the physical infrastructure and its access to the internet. You’re responsible for installation and configuration, patching and updates, and security.
- Common scenarios:
  - Lift-and-shift migration: You’re setting up cloud resources similar to your on-prem datacenter, and then simply moving the things running on-prem to running on the IaaS infrastructure.
  - Testing and development: You have established configurations for development and test environments that you need to rapidly replicate. You can start up or shut down the different environments rapidly with an IaaS structure, while maintaining complete control.

#### Platform as a Service (PaaS)

- Is a middle ground between renting space in a datacenter (infrastructure as a service) and paying for a complete and deployed solution (software as a service)
- The cloud provider maintains the physical infrastructure, physical security, and connection to the internet. They also maintain the operating systems, middleware, development tools, and business intelligence services that make up a cloud solution.
- In a PaaS scenario, you don't have to worry about the licensing or patching for operating systems and databases.
- Common scenarios:
  - Development framework: PaaS provides a framework that developers can build upon to develop or customize cloud-based applications. Similar to the way you create an Excel macro, PaaS lets developers create applications using built-in software components. Cloud features such as scalability, high-availability, and multi-tenant capability are included, reducing the amount of coding that developers must do.
  - Analytics or business intelligence: Tools provided as a service with PaaS allow organizations to analyze and mine their data, finding insights and patterns and predicting outcomes to improve forecasting, product design decisions, investment returns, and other business decisions.

#### Software as a Service (SaaS)

- With SaaS, you’re essentially renting or using a fully developed application. Email, financial software, messaging applications, and connectivity software are all common examples of a SaaS implementation.
- SaaS is the model that places the most responsibility with the cloud provider and the least responsibility with the user.
- Common scenarios:
  - Email and messaging.
  - Business productivity applications.
  - Finance and expense tracking.

| Service | Caracteristcs                                                |
| ------- | ------------------------------------------------------------ |
| IaaS    | More flexible / Configure and manager hardware               |
| PasS    | Application development / Platform manager by cloud provider |
| SaaS    | Software as subscribe / Pay by user                          |

![alt text](image.png)

## 2 - Microsoft Azure Fundamentals: Describe Azure architecture and services

### 2.1 Describe the core architectural components of Azure

#### Azure accounts

![alt text](https://learn.microsoft.com/en-gb/training/wwl-azure/describe-core-architectural-components-of-azure/media/account-scope-levels-9ceb3abd.png)

#### Azure physical infrastructure

- **Core architectural componentes**:
  - **Physical infrastructure**
    - **Datacenters**
      - Are grouped into Azure Regions or Azure Availability Zones that are designed to help you achieve resiliency and reliability for your business-critical workloads
    - **Regions**
      - Is a geographical area on the planet that contains at least one, but potentially multiple datacenters that are nearby and networked together with a low-latency network.
    - **Availability Zones**
      - Availability zones are physically separate datacenters within an Azure region
      - Each availability zone is made up of one or more datacenters equipped with independent power, cooling, and networking
      - An availability zone is set up to be an isolation boundary
      - Availability zones are primarily for VMs, managed disks, load balancers, and SQL databases.
      - Azure services that support availability zones fall into three categories:
        - **Zonal services:** You pin the resource to a specific zone (for example, VMs, managed disks, IP addresses)
        - **Zone-redundant services:** The platform replicates automatically across zones (for example, zone-redundant storage, SQL Database).
        - **Non-regional services:** Services are always available from Azure geographies and are resilient to zone-wide outages as well as region-wide outages.
    - **Region pairs**
      - Most Azure regions are paired with another region within the same geography (such as US, Europe, or Asia) at least 300 miles away.
    - **Sovereign regions**
      - Sovereign regions are instances of Azure that are isolated from the main instance of Azure.
      - ou may need to use a sovereign region for compliance or legal purposes.
  - **Management infrastructure**
    - **Resource** is the basic building block of Azure (VM, BD, virtual network...)
      - Anything you create, provision, deploy, etc. is a resource
      - Resource --> Resource Group (container of resources)
    - **Azure subscriptions**
      - An Azure subscription links to an Azure account, which is an identity in Microsoft Entra ID or in a directory that Microsoft Entra ID trusts.
      - You can use Azure subscriptions to define boundaries around Azure products, services, and resources.
      - There are two types of subscription boundaries that you can use:
        - _Billing boundary_: This subscription type determines how an Azure account is billed for using Azure. You can create multiple subscriptions for different types of billing requirements. Azure generates separate billing reports and invoices for each subscription so that you can organize and manage costs.
        - _Access control boundary_: Azure applies access-management policies at the subscription level, and you can create separate subscriptions to reflect different organizational structures. An example is that within a business, you have different departments to which you apply distinct Azure subscription policies. This billing model allows you to manage and control access to the resources that users provision with specific subscriptions.
    - **Azure management groups**
      - Provide a level of scope above subscriptions
      - You organize subscriptions into containers called management groups and apply governance conditions to the management groups.

### 2.2 Describe Azure compute and networking services

#### Describe Azure Virtual Machine

- Can create and use VMs in the cloud
- As an IaaS offering, you still need to configure, update, and maintain the software that runs on the VM.
- **Scale VMs in Azure** ( you can group VMs together to provide high availability, scalability, and redundancy)
  - **Virtual machine scale sets**
    - Let you create and manage a group of identical, load-balanced VMs.
    - You can build large-scale services for areas such as compute, big data, and container workloads.
  - **Virtual machine availability sets**
    - Availability sets are designed to ensure that VMs stagger updates and have varied power and network connectivity, preventing you from losing all your VMs with a single network or power failure.
    - Availability sets do this by grouping VMs in two ways: _update domain_ and _fault domain_.

#### Describe Azure virtual desktop

- Is a desktop and application virtualization service that runs on the cloud.
- It enables you to use a cloud-hosted version of Windows from any location.

#### Describe Azure containers

- If you want to run multiple instances of an application on a single host machine, containers are an excellent choice.
- You can run multiple containers on a single physical or virtual host.
- **Azure Container Instances**
  - Allow you to upload your containers and then the service will run the containers for you.
  - Are a platform as a service (PaaS)
- **Azure Container Apps**
  - Container Apps have extra benefits such as the ability to incorporate load balancing and scaling
- **Azure Kubernetes Service**
  - AKS is a container orchestration service.
  - An orchestration service manages the lifecycle of containers.

#### Describe Azure functions (serverless)

- **Is an event-driven, serverless compute** option that doesn’t require maintaining virtual machines or containers
- With **Azure Functions**, an event wakes the function, alleviating the need to keep resources provisioned when there are no events
- Azure Functions runs your code when it's triggered and automatically deallocates resources when the function is finished.
- Benefits of Azure Functions:
  - No infrastructure management
  - ScalabilityOnly pay for what you use
- Functions are a key component of serverless computing
- Functions can be:
  - Stateless (default)
    - Restarted every time they respond to an event.
  - Stateful (called Durable Functions)
    - A context is passed through the function to track prior activity

#### Describe application hosting options

- If host an application on Azure, you might initially turn to a **virtual machine** (VM) or **containers**
- But there are other hosting options than can be use, is **Azure App Service**
  - **App Service** enables you to build and host web apps, background jobs, mobile back-ends, and RESTful APIs in the programming language of your choice without managing infrastructure
  - Azure App Service is an HTTP-based service for hosting web applications, REST APIs, and mobile back ends. It supports multiple languages, including .NET, .NET Core, Java, Ruby, Node.js, PHP, or Python. It also supports both Windows and Linux environments.
- Types of app services:
  - Web apps
  - API apps
  - WebJobs
  - Mobile apps

#### Describe Azure virtual networking (VNet)

- Provide the following key networking capabilities:
  - Isolation and segmentation
  - Internet communications
  - Communicate between Azure resources
  - Communicate with on-premises resources
  - Route network traffic
  - Filter network traffic
  - Connect virtual networks
- Communicate between Azure resources
  - Virtual networks
  - Service endpoints
- Communicate with on-premises resources
  - Point-to-site virtual private network
  - Site-to-site virtual private network
  - Azure ExpressRoute

#### Describe Azure virtual private networks (VPN)

- **Azure VPN Gateway** instances are deployed in a dedicated subnet of the virtual network and enable the following connectivity:
  - Connect on-premises datacenters to virtual networks through a site-to-site connection.
  - Connect individual devices to virtual networks through a point-to-site connection.
  - Connect virtual networks to other virtual networks through a network-to-network connection.
- You can deploy only one VPN gateway in each virtual network. However, you can use one gateway to connect to multiple locations, which includes other virtual networks or on-premises datacenters.
- **High-availability scenarios** (There are a few ways to maximize the resiliency of your VPN gateway)
  - Active/active
  - Active/standby
  - ExpressRoute failover
  - Zone-redundant gateways

#### Describe Azure ExpressRoute

- Azure ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection, with the help of a connectivity provider. This connection is called an **ExpressRoute Circuit**.
- Connectivity can be from:
  - An any-to-any (IP VPN) network
  - A point-to-point Ethernet network
  - A virtual cross-connection through a connectivity provider at a colocation facility.
- ExpressRoute connections don't go over the public Internet.
- **ExpressRoute supports four models** that you can use to connect your on-premises network to the Microsoft cloud:
  - CloudExchange colocation
  - Point-to-point Ethernet connection
  - Any-to-any connection
  - Directly from ExpressRoute sites
- With ExpressRoute, your data doesn't travel over the public internet, so it's not exposed to the potential risks associated with internet communications.
- ExpressRoute is a private connection from your on-premises infrastructure to your Azure infrastructure.

#### Describe Azure DNS

- Azure DNS is a hosting service for DNS domains that provides name resolution by using Microsoft Azure infrastructure.
- Benefits of Azure DNS
  - Reliability and performance
  - Security
  - Ease of Use
  - Customizable virtual networks
  - Alias records

### 2.3 Describe Azure storage services

#### Describe Azure storage accounts

- Storage account provides a unique namespace for your **Azure Storage** data that's accessible from anywhere in the world over HTTP or HTTPS
- Azure Storage always stores multiple copies of your data
- List of redundancy options:
  - Locally redundant storage (**LRS**)
  - Geo-redundant storage (**GRS**)
  - Read-access geo-redundant storage (**RA-GRS**)
  - Zone-redundant storage (**ZRS**)
  - Geo-zone-redundant storage (**GZRS**)
  - Read-access geo-zone-redundant storage (**RA-GZRS**)
- Storage account endpoints
  - Storage account names must be between 3 and 24 characters in length and may contain numbers and lowercase letters only.
  - Your storage account name must be unique within Azure.

#### Describe Azure storage redundancy

- **Redundancy in the primary region (LRS & ZRS)**
  - _Data in an Azure Storage account is always replicated three times in the primary region_.
  - Offers two options for how your data is replicated in the primary region>
    - **Locally redundant storage (LRS)**
      - Replicates your data three times within a single data center in the primary region.
      - Provides at least 11 nines of durability (99.999999999%) of objects over a given year.
      - LRS is the lowest-cost redundancy option and offers the least durability compared to other options.
    - **Zone-redundant storage (ZRS)**
      - Replicates your Azure Storage data synchronously across three Azure availability zones in the primary region.
      - Provides at least 12 nines of durability (99.9999999999%) of objects over a given year.
      - Recommended for restricting replication of data within a country or region to meet data governance requirements.
  - **Redundancy in a secondary region (GRS & GZRS)**
    - For applications requiring high durability, you can choose to additionally copy the data in your storage account to a secondary region that is hundreds of miles away from the primary region.
    - By default, data in the secondary region isn't available for read or write access unless there's a failover to the secondary region.
    - - Offers two options for copying your data to a secondary region:
      - **Geo-redundant storage (GRS)**
        - Similar to LRS
        - GRS copies your data synchronously three times within a single physical location in the primary region using LRS.
        - GRS offers durability for Azure Storage data objects of at least 16 nines (99.99999999999999%) over a given year.
      - **Geo-zone-redundant storage (GZRS)**
        - Similar to ZRS
        - GZRS is designed to provide at least 16 nines (99.99999999999999%) of durability of objects over a given year.
    - The interval between the most recent writes to the primary region and the last write to the secondary region is known as the **recovery point objective (RPO)**.
    - The RPO indicates the point in time to which data can be recovered.
    - Azure Storage typically has an **RPO of less than 15 minutes**, although there's currently no SLA on how long it takes to replicate data to the secondary region.
    - For read access to the secondary region, enable (if you enable read access to the secondary region, your data is always available, even when the primary region is running optimally):
      - **Read-access geo-redundant storage (RA-GRS)** or
      - **Read-access geo-zone-redundant storage (RA-GZRS)**.

#### Describe Azure storage services

- The Azure Storage platform includes the following data services:
  - **Azure Blobs**: A massively scalable object store for text and binary data. Also includes support for big data analytics through Data Lake Storage Gen2.
    - Is unstructured, meaning that there are no restrictions on the kinds of data it can hold
    - Can store massive amounts of data, such as text or binary data.
    - Blobs aren't limited to common file formats
  - **Azure Files**: Managed file shares for cloud or on-premises deployments.
    - Azure File storage offers fully managed file shares in the cloud that are accessible via the industry standard Server Message Block (**SMB**) or Network File System (NFS) protocols.
  - **Azure Queues**: A messaging store for reliable messaging between application components.
    - Azure Queue storage is a service for storing large numbers of messages.
    - Queues are commonly used to create a backlog of work to process asynchronously.
  - **Azure Disks**: Block-level storage volumes for Azure VMs.
    - Conceptually, they’re the same as a physical disk, but they’re virtualized – offering greater resiliency and availability than a physical disk.
  - **Azure Tables**: NoSQL table option for structured, non-relational data.
    - Azure tables are a NoSQL datastore that accepts authenticated calls from inside and outside the Azure cloud.
    - Azure tables are ideal for storing structured, non-relational data.

#### Identify Azure data migration options

- Azure supports both real-time migration of infrastructure, applications, and data using **Azure Migrate** as well as asynchronous migration of data using **Azure Data Box**.
- **Azure Migrate**
  - Is a service that helps you migrate from an on-premises environment to the cloud.
- **Azure Data Box**
  - Is a physical migration service that helps transfer large amounts of data in a quick, inexpensive, and reliable way.
  - The Data Box is transported to and from your datacenter via a regional carrier.

#### Identify Azure file movement options

- Azure also has tools designed to help you move or interact with individual files or small file groups. Among those tools are AzCopy, Azure Storage Explorer, and Azure File Sync.
- **AzCopy**
  - AzCopy can even be configured to work with other cloud providers to help move files back and forth between clouds.
- **Azure Storage Explorer**
  - Is a standalone app that provides a graphical interface to manage files and blobs in your Azure Storage Account.
- **Azure File Sync**
  - Is a tool that lets you centralize your file shares in Azure Files and keep the flexibility, performance, and compatibility of a Windows file server.

### 2.4 Describe Azure identity, access, and security

#### Describe Azure directory services

- **Microsoft Entra ID (former Azure Active Directory)** is a directory service that enables you to sign in and access both Microsoft cloud applications and cloud applications that you develop.
- Microsoft Entra ID is for:
  - IT Administrators
  - App developers
  - Users
  - Online service subscribers
- Microsoft Entra ID provides services such as:
  - **Authentication (employees sign-in to access resources)**
  - **Single sign-on (SSO)**
  - **Application management**
  - **Business to Business (B2B)**
  - **Business to Customer (B2C) identity services**
  - **Device management**
- **Microsoft Entra Domain Services**
  - Is a service that provides managed domain services such as domain join, group policy, lightweight directory access protocol (LDAP), and Kerberos/NTLM authentication.

#### Describe Azure authentication methods

- Azure supports multiple authentication methods, including:
  - **standard passwords**
  - **single sign-on (SSO)**
  - **multifactor authentication (MFA)**
  - **passwordless**.

#### Describe Azure external identities

- An external identity is a person, device, service, etc. that is outside your organization.
- The following capabilities make up External Identities:
  - Business to business (B2B) collaboration
  - B2B direct connect
  - Microsoft Azure Active Directory business to customer (B2C)

#### Describe Azure conditional access

- **Conditional Access is a tool that Microsoft Entra ID uses to allow (or deny) access to resources based on identity signals.**
- These signals include:
  - **Who the user is**
  - **Where the user is**
  - **What device the user is requesting access from**

#### Describe Azure role-based access control (RBAC)

- Azure enables you to control access through **Azure role-based access control** (**Azure RBAC**).
- Azure provides built-in roles that describe common access rules for cloud resources.
- You can also define your own roles.
- **Role-based access control is applied to a scope,** which is a resource or set of resources that this access applies to.
- Scopes include:
  - A management group (a collection of multiple subscriptions).
  - A single subscription.
  - A resource group.
  - A single resource.
- **Azure RBAC is hierarchical**, in that when you grant access at a parent scope, those permissions are inherited by all child scopes.

#### Describe zero trust model

- Zero Trust is a security model that assumes the worst case scenario and protects resources with that expectation.
- Zero Trust assumes breach at the outset, and then verifies each request as though it originated from an uncontrolled network.
- Is based on these guiding principles:
  - **Verify explicitly** - Always authenticate and authorize based on all available data points.
  - **Use least privilege access** - Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection.
  - **Assume breach** - Minimize blast radius and segment access. Verify end-to-end encryption. Use analytics to get visibility, drive threat detection, and improve defenses.

#### Describe defense-in-depth

- The objective of defense-in-depth is to protect information and prevent it from being stolen by those who aren't authorized to access it.
- Uses a series of mechanisms to slow the advance of an attack that aims at acquiring unauthorized access to data.
- **Layers**:
  - **Physical security**
  - **Identity and access**
  - **Perimeter**
  - **Network**
  - **Compute**
  - **Application**
  - **Data**
- Overview of the role of each layer:
  - **Physical security** layer is the first line of defense to protect computing hardware in the datacenter.
  - **Identity and access** layer controls access to infrastructure and change control.
    - At this layer, it's important to:
      - Control access to infrastructure and change control.
      - Use single sign-on (SSO) and multifactor authentication.
      - Audit events and changes.
  - **Perimeter** layer uses distributed denial of service (DDoS) protection to filter large-scale attacks before they can cause a denial of service for users.
    - At this layer, it's important to:
      - Use DDoS protection to filter large-scale attacks before they can affect the availability of a system for users.
      - Use perimeter firewalls to identify and alert on malicious attacks against your network.
  - **Network** layer limits communication between resources through segmentation and access controls.
    - At this layer, it's important to:
      - Limit communication between resources.
      - Deny by default.
      - Restrict inbound internet access and limit outbound access where appropriate.
      - Implement secure connectivity to on-premises networks.
  - **Compute** layer secures access to virtual machines.
    - At this layer, it's important to:
      - Secure access to virtual machines.
      - Implement endpoint protection on devices and keep systems patched and current.
  - **Application** layer helps ensure that applications are secure and free of security vulnerabilities.
    - At this layer, it's important to:
      - Ensure that applications are secure and free of vulnerabilities.
      - Store sensitive application secrets in a secure storage medium.
      - Make security a design requirement for all application development.
  - **Data** layer controls access to business and customer data that you need to protect.
    - In almost all cases, attackers are after data:
      - Stored in a database.
      - Stored on disk inside virtual machines.
      - Stored in software as a service (SaaS) applications, such as Office 365.
      - Managed through cloud storage.

#### Describe Microsoft Defender for Cloud

- Defender for Cloud is a monitoring tool for security posture management and threat protection.
- It monitors your cloud, on-premises, hybrid, and multi-cloud environments to provide guidance and notifications aimed at strengthening your security posture.
- It’s already natively integrated to Azure.
- Defender for Cloud helps you detect threats across:
  - Azure PaaS services
  - Azure data services
  - Networks
- Can add Defender for Cloud capabilities to your hybrid cloud environment to protect your non-Azure servers.
- Defender for Cloud fills three vital needs as you manage the security of your resources and workloads in the cloud and on-premises:
  - **Continuously assess** – Know your security posture. Identify and track vulnerabilities.
  - **Secure** – Harden resources and services with Azure Security Benchmark.
  - **Defend** – Detect and resolve threats to resources, workloads, and services.

## 3 - Microsoft Azure Fundamentals: Describe Azure management and governance

### 3.1 Describe cost management in Azure

#### Describe factors that can affect costs in Azure

- A number of factors influence the cost of Azure resources:
  - the **type of resources**
  - the **settings** for the resource
  - the Azure **region** will all have an impact on how much a resource costs.
- That OpEx cost can be impacted by many factors. Some of the impacting factors are:
  - **Resource type**
  - **Consumption**
  - **Maintenance**
  - **Geography**
  - **Subscription type**
  - **Azure Marketplace**

#### Compare the Pricing and Total Cost of Ownership calculators

- The **pricing calculator** and the **total cost of ownership (TCO) calculator** are two calculators that help you understand potential Azure expenses
  - **Pricing calculator**
    - Is designed to give you an estimated cost for provisioning resources in Azure.
  - **TCO calculator**
    - Is designed to help you compare the costs for running an on-premises infrastructure compared to an Azure Cloud infrastructure.

#### Describe the Microsoft Cost Management tool

- **Cost Management** is a service that helps avoid accidentally provision new resources, you may not be aware of them until it’s time for your invoice.
- **Cost Management** provides the ability to quickly check Azure resource costs, create alerts based on resource spend, and create budgets that can be used to automate management of resources.

#### Describe the purpose of tags

- You can also use resource groups to manage related resources.
- Resource tags are another way to organize resources. Tags provide extra information, or metadata, about your resources.
- You can use Azure Policy to enforce tagging rules and conventions.

### 3.2 Describe features and tools in Azure for governance and compliance

#### Describe the purpose of Microsoft Purview

- **Microsoft Purview** is a family of data governance, risk, and compliance solutions that helps you get a single, unified view into your data.
- With Microsoft Purview, you can stay up-to-date on your data landscape thanks to:
  - Automated data discovery
  - Sensitive data classification
  - End-to-end data lineage
- Two main solution areas comprise Microsoft Purview:
  - **Risk and compliance**
    - For risk, compliance and legal teams
    - Microsoft 365 features as a core component of the Microsoft Purview risk and compliance solutions
    - Microsoft Purview, by managing and monitoring your data, is able to help your organization:
      - Protect sensitive data across clouds, apps, and devices.
      - Identify data risks and manage regulatory compliance requirements.
      - Get started with regulatory compliance.
  - **Unified data governance**
    - For data consumers, data engineers, data officers
    - Microsoft Purview’s unified data governance helps your organization:
      - Create an up-to-date map of your entire data estate that includes data classification and end-to-end lineage.
      - Identify where sensitive data is stored in your estate.
      - Create a secure environment for data consumers to find valuable data.
      - Generate insights about how your data is stored and used.
      - Manage access to the data in your estate securely and at scale.

#### Describe the purpose of Azure Policy

- Azure Policy is a service in Azure that enables you to **create**, **assign**, and **manage** **policies** that control or audit your resources.
- Azure Policy enables you to define both **individual policies** and **groups of related policies**, known as **initiatives**.
- **Azure Policy initiative**:
  - Is a way of grouping related policies together.
  - The initiative definition contains all of the policy definitions to help track your compliance state for a larger goal.

#### Describe the purpose of resource locks

- A **Resource Lock** prevents resources from being accidentally deleted or changed.
- Even with Azure role-based access control (Azure RBAC) policies in place, there's still a risk that people with the right level of access could delete critical cloud resources.
- Resource locks can be applied to individual resources, resource groups, or even an entire subscription.
- Resource locks are inherited
- Types of Resource Locks:
  - Prevents users from deleting
  - Prevents users from changing or deleting a resource.

#### Describe the purpose of the Service Trust portal

- The **Microsoft Service Trust Portal** is a portal that provides access to various content, tools, and other resources about Microsoft security, privacy, and compliance practices.
- https://servicetrust.microsoft.com

### 3.3 Describe features and tools for managing and deploying Azure resources

#### Describe tools for interacting with Azure

- Azure provides multiple tools for managing your environment, including the:
  - **Azure portal**
    - The Azure portal is a web-based, unified console that provides an alternative to command-line tools.
    - **Azure Cloud Shell** is a browser-based shell tool that allows you to create, configure, and manage Azure resources using a shell.
      - Azure Cloud Shell support both Azure PowerShell and the Azure Command Line Interface (CLI), which is a Bash shell.
  - **Azure PowerShell**
    - Azure PowerShell is a shell with which developers, DevOps, and IT professionals can run commands called command-lets (cmdlets).
    - These commands call the Azure REST API to perform management tasks in Azure.
  - **Azure Command Line Interface (CLI)**
    - The Azure CLI is functionally equivalent to Azure PowerShell, with the primary difference being the syntax of commands.
    - While Azure PowerShell uses PowerShell commands, the Azure CLI uses Bash commands.

#### Describe the purpose of Azure Arc

- In utilizing **Azure Resource Manager (ARM)**, **Azure Arc** lets you **extend your Azure compliance and monitoring to your hybrid and multi-cloud configurations**.
- **Azure Arc** simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform.
- Azure Arc allows you to manage the following resource types hosted outside of Azure:
  - Servers
  - Kubernetes clusters
  - Azure data services
  - SQL Server
  - Virtual machines (preview)

#### Describe Azure Resource Manager and Azure ARM templates

- **Azure Resource Manager (ARM)**:
  - Is the deployment and management service for Azure.
  - It provides a management layer that enables you to create, update, and delete resources in your Azure account.
- **Infrastructure as code**
  - you can use the infrastructure as code concept to manage entire deployments using repeatable templates and configurations.
  - **ARM templates** and **Bicep** are two examples of using infrastructure as code with the Azure Resource Manager to maintain your environment.
  - **ARM templates**
    - Describe the resources you want to use in a declarative JSON format.
    - With an ARM template, the deployment code is verified before any code is run.
    - Benefits of using ARM templates
      - Declarative syntax
      - Repeatable results
      - Orchestration
      - Modular files
      - Extensibility
  - **Bicep**
    - Bicep is a language that uses declarative syntax to deploy Azure resources.
    - A Bicep file defines the infrastructure and configuration.
    - ARM deploys that environment based on your Bicep file.
    - While similar to an ARM template, which is written in JSON, Bicep files tend to use a simpler, more concise style.
    - Benefits of Bicep:
      - Support for all resource types and API versions
      - Simple syntax
      - Repeatable results
      - Orchestration
      - Modularity

### 3.4 Describe monitoring tools in Azure

#### Describe the purpose of Azure Advisor

- **Azure Advisor** evaluates your Azure resources and makes recommendations to help improve:
  - Reliability
  - Security
  - Performance
  - Achieve operational excellence
  - Reduce costs.

#### Describe Azure Service Health

- **Azure Service Health** helps you keep track of Azure resource, both your specifically deployed resources and the overall status of Azure.
- Azure service health does this by combining three different Azure services:
  - **Azure Status**
    - Is a broad picture of the status of Azure globally.
  - **Service Health**
    - Provides a narrower view of Azure services and regions.
  - **Resource Health**
    - Is a tailored view of your actual Azure resources.
    - It provides information about the health of your individual cloud resources

#### Describe Azure Monitor

- **Azure Monitor** is a platform for collecting data on your resources, analyzing that data, visualizing the information, and even acting on the results.
- Can monitor Azure resources, your on-premises resources, and even multi-cloud resources like virtual machines hosted with a different cloud provider.
- **Azure Log Analytics** is the tool in the Azure portal where you’ll write and run log queries on the data gathered by Azure Monitor.
  - You can write a simple or an advanced query to perform statistical analysis and visualize the results in a chart to identify a particular trend.
- **Azure Monitor Alerts**
  - Are an automated way to stay informed when Azure Monitor detects a threshold being crossed.
- **Application Insights**
  - Is an Azure Monitor feature, monitors your web applications.
  - Is capable of monitoring applications that are running in Azure, on-premises, or in a different cloud environment.

---

**Describe cloud concepts (25–30%)**

- **_Describe cloud computing_**
  - [x] **Define cloud computing**
    - É a entrega de serviços de computação pela internet, atendendo projetos de diversos tamanhos, com alta disponibilidade, elasticidade, recuperação de desastre, pagamento por uso, entre outros benefícios
    - Computação - Rede - Armazenamento - Análise
  - [x] **Describe the shared responsibility model**
    - **IaaS** (Dados e acesso, aplicativos, runtime, SO, maquina virtual)
    - **PaaS** (Dados e acesso, e aplicativos)
    - **SaaS** (dados e acesso)
  - [x] **Define cloud models, including public, private, and hybrid**
    - **Publica**
      - Tudo disponível na web e compartilhado entre vários usuários que o usam simultaneamente (mas separadamente)
    - **Privada**
      - Oferece à empresa a possibilidade de personalizar as funções e o suporte às suas necessidades (on-premises)
    - **Híbrida**
      - Permite compartilhar dados e aplicativos entre os dois tipos de nuvem
  - [ ] Identify appropriate use cases for each cloud model
  - [x] **Describe the consumption-based model**
    - Os usuários só pagam pelos recursos que usam
      - Melhor previsão de custos
      - Cobrança baseado no uso real
  - [x] **Compare cloud pricing models**
    - **CapEx**
      - Gasto inicial de dinheiro na infraestrutura física
      - Os custos têm valor que é reduzido ao longo do tempo
    - **OpEx**
      - Gastos em produtos e serviços conforme necessário, pagamento conforme o uso
      - Receber a conta imediatamente
  - [x] **Describe serverless**
    - O provedor de serviços de nuvem provisiona, escala e gerencia automaticamente a infraestrutura necessária para executar o código
      - **Azure Functions**
        - Cria infraestrutura com base em um evento
      - **Aplicativos lógicos do Azure**
        - Serviço em nuvem que ajuda na automatização e na orquestração de tarefas, processos e fluxos de trabalho quando é preciso integrar aplicativos, dados, sistemas e serviços
- _Describe the benefits of using cloud services_
  - Describe the benefits of high availability and scalability in the cloud
  - Describe the benefits of reliability and predictability in the cloud
  - Describe the benefits of security and governance in the cloud
  - Describe the benefits of manageability in the cloud
- _Describe cloud service types_
  - Describe infrastructure as a service (IaaS)
  - Describe platform as a service (PaaS)
  - Describe software as a service (SaaS)
  - Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)

**Describe Azure architecture and services (35–40%)**

- _Describe the core architectural components of Azure_
  - [x] **Describe Azure regions, region pairs, and sovereign regions**
    - **Regions**
      - Mais de 60 regiões representando mais de 140 países
      - Pode ter um ou mais datacenters
    - **Regions Pairs**
      - Cada região é emparelhada com outra região com o mínimo de 300 milhas de separação entre datacenters
    - **Sovereign regions**
      - EUA
      - China
  - [x] **Describe availability zones**
    - Datacenters fisicamente separados mas na mesma região
    - Cada datacenter é equipamento com energia, resfriamento e rede
  - [ ] Describe Azure datacenters
  - [x] **Describe Azure resources and resource groups**
    - **Resources**
      - Componentes como armazenamento, VM, rede que estão disponíveis para construir a solução de cloud
    - **Resource groups**
      - Um container para gerenciar e agregar os recursos em uma unidade
        - Os recursos só podem existir em um único grupo de recursos
        - Recursos podem existir em diferentes regiões
        - Os recursos podem ser movidos entre diferentes grupos de recursos
        - Aplicações podem utilizar vários grupos de recursos
  - [x] **Describe subscriptions**
    - Fornece autenticação e autorização de acesso à conta da Azure
  - [x] **Describe management groups**
    - Pode incluir várias assinaturas do Azure
  - [x] **Describe the hierarchy of resource groups, subscriptions, and management groups**
    - Grupos de gerenciamento > assinaturas > grupos de recursos > recursos
- _Describe Azure compute and networking services_
  - Compare compute types, including containers, virtual machines, and functions
  - Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop
  - Describe the resources required for virtual machines
  - Describe application hosting options, including web apps, containers, and virtual machines
  - Describe virtual networking, including the purpose of Azure virtual networks, Azure virtual subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute
  - Define public and private endpoints
- _Describe Azure storage services_
  - Compare Azure Storage services
  - Describe storage tiers
  - Describe redundancy options
  - Describe storage account options and storage types
  - Identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync
  - Describe migration options, including Azure Migrate and Azure Data Box
- _Describe Azure identity, access, and security_
  - Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services
  - Describe authentication methods in Azure, including single sign-on (SSO), multi-factor authentication (MFA), and passwordless
  - Describe external identities in Azure, including business-to-business (B2B) and business-to-customer (B2C)
  - Describe Microsoft Entra Conditional Access
  - Describe Azure role-based access control (RBAC)
  - Describe the concept of Zero Trust
  - Describe the purpose of the defense-in-depth model
  - Describe the purpose of Microsoft Defender for Cloud

**Describe Azure management and governance (30–35%)**

- _Describe cost management in Azure_
  - Describe factors that can affect costs in Azure
  - Compare the pricing calculator and the Total Cost of Ownership (TCO) Calculator
  - Describe cost management capabilities in Azure
  - Describe the purpose of tags
- _Describe features and tools in Azure for governance and compliance_
  - Describe the purpose of Microsoft Purview in Azure
  - Describe the purpose of Azure Policy
  - Describe the purpose of resource locks
- _Describe features and tools for managing and deploying Azure resources_
  - Describe the Azure portal
  - Describe Azure Cloud Shell, including Azure Command-Line Interface (CLI) and Azure PowerShell
  - Describe the purpose of Azure Arc
  - Describe infrastructure as code (IaC)
  - Describe Azure Resource Manager (ARM) and ARM templates
- _Describe monitoring tools in Azure_
  - Describe the purpose of Azure Advisor
  - Describe Azure Service Health
  - Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Application Insights
