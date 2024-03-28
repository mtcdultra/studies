# AZ-900

[Back to README.md](README.md)

---

http://aka.ms/az-900

---

## 1. Cloud fundamentals

### 1.1. **Cloud Computing**

#### 1.1.1. What is cloud computing

- Is the delivering of computing services over the internet, enabling faster innovation, flexible resources, and economies of scale
- **Compute - Networking - Storage**

#### 1.1.2. Shared responsibility model

|                              | Responsibility                        | SaaS    | PaaS    | IaaS  | On-P. |
| ---------------------------- | ------------------------------------- | ------- | ------- | ----- | ----- |
| **Retained by the customer** | Information and data                  | **C**   | **C**   | **C** | **C** |
|                              | Devices (mobile and PCs)              | **C**   | **C**   | **C** | **C** |
|                              | Account and identities                | **C**   | **C**   | **C** | **C** |
| **Varies by type**           | Identity and directory infrastructure | **M/C** | **M/C** | **C** | **C** |
|                              | Applications                          | **M**   | **M/C** | **C** | **C** |
|                              | Network controls                      | **M**   | **M/C** | **C** | **C** |
|                              | Operating systems                     | **M**   | **M**   | **C** | **C** |
| **To cloud provider**        | Physical hosts                        | **M**   | **M**   | **M** | **C** |
|                              | Physical network                      | **M**   | **M**   | **M** | **C** |
|                              | Physical datacenter                   | **M**   | **M**   | **M** | **C** |
| M: Microsoft, C: Customer    |                                       |         |         |       |       |
|                              |                                       |         |         |       |       |

#### 1.1.3. Cloud models

| Cloud types       | Characteristics                                               |
| ----------------- | ------------------------------------------------------------- |
| **Private cloud** | Organizations create a cloud environment in their datacenter  |
|                   | Control all data and infrastructure                           |
|                   | Hardware must be purchased for start-up and maintenance       |
|                   | Countable to fix any issues                                   |
|                   | Responsible for operating services                            |
|                   | No access to users outside of the organization                |
| **Public cloud**  | Organizations create a cloud environment in their datacenter  |
|                   | Azure, GCP, AWS ...                                           |
|                   | Owned by cloud services or hosting provider                   |
|                   | Accessed via secure network connection                        |
|                   | Pay-as-you-go model                                           |
|                   | No capital expenditures to scale up                           |
|                   | Applications can be quickly provisioned and deprovisioned     |
| **Hybrid cloud**  | Combines public and private clouds                            |
|                   | to allow applications to run in the most appropriate location |
|                   | Provide most flexibility                                      |
|                   |                                                               |

#### 1.1.4. Capital vs Operational costing

- **CapEx**
  - The up-front spending of money on physical infrastructure
  - Cost have a value that reduces over time
- **OpEx**
  - Spend on products and services as needed
  - Get billed immediately

### 1.2 **Cloud Benefits**

#### 1.2.1. Benefits of the cloud

- **High availability**
- **Scalability** (ability to scale - vertically or horizontally)
  - **Vertically** (8GB of RAM to 16GB of RAM for instance)
  - **Horizontally** (Adding another VM or resource)
- **Elasticity** (scale automatically)
- **Reliability**
- **Predictability**
- **Security**
- **Governance**
- **Manageability**

### 1.3 **Cloud Service Types**

#### 1.3.1. IaaS, PaaS and SaaS

- **Infrastructure as a Service (IaaS)**

  - Most flexible and maximum cloud control
  - Configure and manage the hardware

- **Platform as a Service (PaaS)**

  - Focus on applications
  - No focus on managing underlying infrastructure
  - Platform management is handled by the cloud provider

- **Software as a Service (SaaS)**

  - Pay-as-you-go
  - Cloud-based apps over the internet (email, Office 365 ...)

## 2. Azure architecture and Azure compute services

### 2.1. **Azure architectural components**

#### 2.1.1. Regions and Availability Zones

- **Regions**

  - More then 60 regions over 140 countries
  - One or mode datacenters in close proximity
  - Provide flexibility and scale to **reduce** customer **latency**
  - Preserve data residency with a comprehensive compliance offering

- **Availability zones** (to improve redundancy)

  - Provide **protection against** downtime due to datacenter **(local) failure**
  - Physically **separate** datacenters within the **same region**
  - Each datacenter has independent resources
  - Connected through private fiber-optic networks
  - |                     | Azure Region |                     |
    | ------------------- | :----------: | ------------------- |
    | Availability Zone 1 |    <---->    | Availability Zone 2 |
    | Availability Zone 2 |    <---->    | Availability Zone 3 |
    | Availability Zone 1 |    <---->    | Availability Zone 3 |

- **Region Pairs** (to improve redundancy to other region)

  - Prevent natural disaster
  - At least 300 miles of separation between region pais
  - **Automatic replication** for some services
  - Updates are rollout sequentially to minimize downtime

- **Azure Sovereign Regions** (physically isolated instance of Azure)
  - **US Government services**
    - Separate instance of Azure
    - Accessible only to screened, authorized personal
    - Physically isolated
  - **China**
    - Public cloud service data
    - All data stays in China
    - Operated by 21Vianet

#### 2.1.2. Subscriptions and Resource Groups

- **Resources**

  - Are components like storage, VM and networks that are available to build cloud solutions
  - **Examples**: VMs, Storage Accounts, Virtual Networks, App Services, SQL Databases, Functions

- **Resource groups**

  - Is a container to manage and aggregate resources in a single unit
    - Resources can exist in only one resource group
    - Resource can exist in different regions
    - Resources can be moved to different resource groups
    - Applications can utilize multiple resource groups
    - Cannot be nested

- **Azure Subscription**

  - Provides you with authentication and authorized access to Azure accounts:

    - **Billing boundary**

      - Generate separate billing reports and invoices for each subscription

    - **Access control boundary**
      - Manage and control access to the resources that users can provision with specific subscriptions
      - ```mermaid
        flowchart TD
            AC[Azure Account] --> S1[Dev Subscription]
            AC[Azure Account] --> S2[Test Subscription]
            AC[Azure Account] --> S3[Production Subscription]
        ```

- **Management Groups**

  - Management groups can include multiple subscriptions
  - Subscriptions inherit conditions applied to the management group
  - Management groups tree can support up to six levels of depth
  - ```mermaid
    flowchart TD
        MG[Management Group] --> S1[Dev. Subscription]
        MG --> S2[Test. Subscription]
        S1 --> RG1[Resource Group 1]
        S2 --> RG2[Resource Group 2]
        S2 --> RG3[Resource Group 3]
        RG1 --> R1[VM]
        RG2 --> R2[VM]
        RG2 --> R3[SQL DB]
        RG2 --> R4[Function]
        RG3 --> R5[Storage]
    ```

### 2.2. Compute

#### 2.2.1. Compute types

- **Azure compute services**
  - Azure compute is an on-demand computing service thar provides computing resources such as disks, processors, memory, networking, and operating systems
- **Types**:
  - **Virtual Machines**
    - Software emulations of physical computers
    - **IaaS** offering that provides total control and customization
    - **_VM scale sets_**
      - Let you create and manage a group of identical, load-balanced VMs
      - Provide a load-balanced opportunity to automatically scale resources
    - **_VM availability sets_**
      - Are designed to ensure that VMs stagger updates and have varied power and network connectivity, preventing you from losing all your VMs with a single network or power failure
  - **Azure App Services**
    - Is a fully managed platform to build, deploy and scale web apps and APIs quickly
    - Works with .NET, .NET Core, Java, Node.js, PHP, and Python
  - **Azure Container Services**
    - Are light-weight, virtualized environment that does not require operating system management, and respond to changes on demand
    - A PaaS offering that runs a container or pod of containers in Azure
    - **Azure Container Instances**
      - A PaaS offering that runs a container without need to manage a VM or additional services
    - **Azure Kubernetes Services (AKS)**
      - An orchestration service for containers with distributed architectures and large volumes of containers
  - **Azure Virtual Desktop**
    - Is a desktop and app virtualization service that runs in the cloud
    - True multi session deployments
  - **Azure Functions**
    - a PaaS offering that supports serverless compute operations
    - Event-based code runs when called without requiring server infrastructure during inactive periods

## 3. Azure networking

### 3.1. Networking

- **Azure Virtual Network (VNet)**

  - Enables Azure **resources to communicate with each other**, the internet, and on-premises networks
  - Types:
    - **Public endpoints**
    - **Private endpoints**
    - **Virtual subnets** (segment your network to suit your needs)
    - **Network peering** (connect your private networks directly together)

- **Azure VPN Gateway**
  - Is used to send encrypted traffic between an Azure VNet and an on-premises location over the public internet

* **Azure ExpressRoute**

  - Extends on-premises networks into Azure over a private connection that is facilitated by a connectivity provider
  - In **VPN Gateway** uses public internet but in **ExpressRoute** uses dedicated connection
  - More performance and secure

* **Azure DNS**
  - Reliability and performance
  - Azure DNS security
  - Ease of use
  - Customizable VN
  - Alias records

## 4. Azure storage

## 5. Azure identity, access, and security and Azure cost management

## 6. Azure governance and compliance, Azure resource management, and Azure monitoring services
