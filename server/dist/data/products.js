export const products = [
    {
        id: 1,
        name: "TP-Link Archer AX73 Wi-Fi 6 Router",
        description: "Router Wi-Fi 6 AX5400 với 4 ăng-ten tốc độ cao, hỗ trợ OneMesh và WPA3",
        price: 2490000,
        originalPrice: 2990000,
        discount: 17,
        categoryId: 7, // Router Wi-Fi 6
        brandId: 1, // TP-Link
        images: [
            "/images/products/tp-link-ax73-wifi-6-router-black-modern-design.jpg",
            "/images/products/router-wifi6-tplink.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AX5400 (4804 Mbps + 574 Mbps)",
            "Chuẩn Wi-Fi": "802.11ax/ac/n/a/g/b",
            "Số ăng-ten": "4 ăng-ten ngoài có thể điều chỉnh",
            "Cổng mạng": "1 WAN Gigabit + 4 LAN Gigabit",
            "Bộ xử lý": "Quad-core 1.5GHz",
            "Bộ nhớ": "512MB RAM",
            "Kích thước": "272.5 × 147.2 × 49.2 mm"
        },
        inStock: true,
        stockQuantity: 15,
        rating: 4.5,
        reviewCount: 23,
        tags: ["Wi-Fi 6", "Gaming Router", "High Speed", "OneMesh"],
        createdAt: "2024-01-15T00:00:00Z",
        updatedAt: "2024-01-15T00:00:00Z"
    },
    {
        id: 2,
        name: "ASUS RT-AX88U Gaming Router",
        description: "Router gaming Wi-Fi 6 với 8 cổng Gigabit, AiMesh và Adaptive QoS",
        price: 4990000,
        originalPrice: 5990000,
        discount: 17,
        categoryId: 6, // Router Gaming
        brandId: 2, // ASUS
        images: [
            "/images/products/asus-rt-ax88u-black-gaming-router-with-red-accents.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AX6000 (4804 + 1148 Mbps)",
            "Chuẩn Wi-Fi": "802.11ax/ac/n/a/g/b",
            "Số ăng-ten": "4 ăng-ten ngoài + 4 ăng-ten trong",
            "Cổng mạng": "1 WAN + 8 LAN Gigabit",
            "Gaming Features": "Adaptive QoS, Gaming Accelerator",
            "Bộ xử lý": "Quad-core 1.8GHz",
            "Bộ nhớ": "1GB RAM + 256MB Flash"
        },
        inStock: true,
        stockQuantity: 8,
        rating: 4.8,
        reviewCount: 45,
        tags: ["Wi-Fi 6", "Gaming", "AiMesh", "8 Ports"],
        createdAt: "2024-01-10T00:00:00Z",
        updatedAt: "2024-01-10T00:00:00Z"
    },
    {
        id: 3,
        name: "Netgear Nighthawk AX12 Router",
        description: "Router Wi-Fi 6 cao cấp với 12 luồng và tốc độ AX6000",
        price: 3990000,
        originalPrice: 4490000,
        discount: 11,
        categoryId: 7, // Router Wi-Fi 6
        brandId: 3, // Netgear
        images: [
            "/images/products/netgear-nighthawk-black-angular-router-with-blue-l.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AX6000 (4804 + 1200 Mbps)",
            "Chuẩn Wi-Fi": "802.11ax/ac/n/a/g/b",
            "Số ăng-ten": "8 ăng-ten hiệu suất cao",
            "Cổng mạng": "1 WAN + 4 LAN Gigabit",
            "Tính năng": "Dynamic QoS, VPN Support",
            "Bộ xử lý": "Quad-core 1.8GHz",
            "Bộ nhớ": "1GB RAM"
        },
        inStock: true,
        stockQuantity: 12,
        rating: 4.6,
        reviewCount: 32,
        tags: ["Wi-Fi 6", "Nighthawk", "12 Stream", "VPN"],
        createdAt: "2024-01-12T00:00:00Z",
        updatedAt: "2024-01-12T00:00:00Z"
    },
    {
        id: 4,
        name: "TP-Link Deco X60 Mesh Wi-Fi 6 System",
        description: "Hệ thống Mesh Wi-Fi 6 AX3000 với 3 units, phủ sóng toàn diện",
        price: 5990000,
        originalPrice: 6990000,
        discount: 14,
        categoryId: 5, // Mesh Wi-Fi
        brandId: 1, // TP-Link
        images: [
            "/images/products/mesh-wifi-system.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AX3000 (2402 + 574 Mbps)",
            "Chuẩn Wi-Fi": "802.11ax/ac/n/a/g/b",
            "Phủ sóng": "Lên đến 500m² (3 units)",
            "Số thiết bị": "Hỗ trợ 150+ thiết bị",
            "Cổng mạng": "2 Gigabit mỗi unit",
            "Tính năng": "AI-Driven Mesh, Antivirus",
            "Bộ xử lý": "Quad-core ARM"
        },
        inStock: true,
        stockQuantity: 6,
        rating: 4.7,
        reviewCount: 28,
        tags: ["Wi-Fi 6", "Mesh", "Whole Home", "AI-Driven"],
        createdAt: "2024-01-08T00:00:00Z",
        updatedAt: "2024-01-08T00:00:00Z"
    },
    {
        id: 5,
        name: "Cisco Catalyst 2960-24TC-L Switch",
        description: "Switch mạng 24 cổng Gigabit Ethernet cho doanh nghiệp",
        price: 8990000,
        originalPrice: 9990000,
        discount: 10,
        categoryId: 2, // Switch Mạng
        brandId: 4, // Cisco
        images: [
            "/images/products/cisco-black-rack-mount-network-switch-with-multipl.jpg"
        ],
        specifications: {
            "Số cổng": "24 x 10/100/1000 Ethernet",
            "Uplink": "2 x SFP",
            "Switching Capacity": "56 Gbps",
            "MAC Table": "8K entries",
            "Power": "370W max",
            "Mounting": "1U Rack-mount",
            "Management": "Web-based, CLI, SNMP"
        },
        inStock: true,
        stockQuantity: 5,
        rating: 4.9,
        reviewCount: 15,
        tags: ["Enterprise", "24 Port", "Gigabit", "Rack Mount"],
        createdAt: "2024-01-05T00:00:00Z",
        updatedAt: "2024-01-05T00:00:00Z"
    },
    {
        id: 6,
        name: "D-Link DGS-1024D 24-Port Switch",
        description: "Switch mạng không quản lý 24 cổng Gigabit cho văn phòng nhỏ",
        price: 1990000,
        originalPrice: 2290000,
        discount: 13,
        categoryId: 2, // Switch Mạng
        brandId: 5, // D-Link
        images: [
            "/images/products/network-switch-24port.jpg",
            "/images/products/network-switch-black.jpg"
        ],
        specifications: {
            "Số cổng": "24 x 10/100/1000 Ethernet",
            "Switching Capacity": "48 Gbps",
            "MAC Table": "8K entries",
            "Frame Buffer": "1.5MB",
            "Power Consumption": "17.6W max",
            "Mounting": "Desktop/Rack-mount",
            "Kích thước": "440 x 208 x 44 mm"
        },
        inStock: true,
        stockQuantity: 20,
        rating: 4.3,
        reviewCount: 18,
        tags: ["Unmanaged", "24 Port", "Desktop", "Small Office"],
        createdAt: "2024-01-03T00:00:00Z",
        updatedAt: "2024-01-03T00:00:00Z"
    },
    {
        id: 7,
        name: "Hikvision DS-2CD2143G0-I Dome Camera",
        description: "Camera IP dome 4MP với công nghệ DarkFighter và H.265+",
        price: 2490000,
        originalPrice: 2790000,
        discount: 11,
        categoryId: 9, // Camera Dome
        brandId: 8, // Hikvision
        images: [
            "/images/products/hikvision-white-dome-security-camera-with-infrared.jpg"
        ],
        specifications: {
            "Độ phân giải": "4MP (2688 × 1520)",
            "Lens": "2.8mm fixed lens",
            "Tầm nhìn ban đêm": "30m IR",
            "Compression": "H.265+/H.265/H.264+/H.264",
            "Tính năng": "DarkFighter, WDR 120dB",
            "Kháng nước": "IP67",
            "Nguồn": "DC12V/PoE+"
        },
        inStock: true,
        stockQuantity: 25,
        rating: 4.6,
        reviewCount: 42,
        tags: ["4MP", "Dome", "DarkFighter", "IP67"],
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z"
    },
    {
        id: 8,
        name: "Dahua IPC-HFW4431S-S6 Bullet Camera",
        description: "Camera IP bullet 4MP với Starlight và Smart IR",
        price: 1990000,
        originalPrice: 2290000,
        discount: 13,
        categoryId: 10, // Camera Bullet
        brandId: 9, // Dahua
        images: [
            "/images/products/dahua-white-bullet-security-camera-with-infrared-l.jpg"
        ],
        specifications: {
            "Độ phân giải": "4MP (2688 × 1520)",
            "Lens": "3.6mm fixed lens",
            "Tầm nhìn ban đêm": "60m Smart IR",
            "Compression": "H.265/H.264",
            "Tính năng": "Starlight, 3D DNR",
            "Kháng nước": "IP67",
            "Nguồn": "DC12V/PoE+"
        },
        inStock: true,
        stockQuantity: 30,
        rating: 4.4,
        reviewCount: 35,
        tags: ["4MP", "Bullet", "Starlight", "60m IR"],
        createdAt: "2023-12-28T00:00:00Z",
        updatedAt: "2023-12-28T00:00:00Z"
    },
    {
        id: 9,
        name: "TP-Link AC600T2U Plus USB Wi-Fi Adapter",
        description: "USB Wi-Fi AC600 dual-band với ăng-ten có thể điều chỉnh",
        price: 349000,
        originalPrice: 399000,
        discount: 13,
        categoryId: 4, // USB Wi-Fi
        brandId: 1, // TP-Link
        images: [
            "/images/products/usb-wifi-adapter-black.jpg",
            "/images/products/usb-wifi-adapter.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AC600 (433 + 150 Mbps)",
            "Chuẩn Wi-Fi": "802.11ac/n/g/b",
            "Ăng-ten": "2 ăng-ten có thể điều chỉnh",
            "Kết nối": "USB 2.0",
            "Bảo mật": "WPA3/WPA2/WPA/WEP",
            "Hệ điều hành": "Windows/Mac/Linux",
            "Kích thước": "91.6 × 26.2 × 11.5 mm"
        },
        inStock: true,
        stockQuantity: 50,
        rating: 4.2,
        reviewCount: 67,
        tags: ["USB Wi-Fi", "AC600", "Dual Band", "Adjustable"],
        createdAt: "2023-12-25T00:00:00Z",
        updatedAt: "2023-12-25T00:00:00Z"
    },
    {
        id: 10,
        name: "Xiaomi Mi Router 4A Gigabit",
        description: "Router Wi-Fi AC1200 với 4 ăng-ten và cổng Gigabit",
        price: 590000,
        originalPrice: 690000,
        discount: 14,
        categoryId: 1, // Router Wi-Fi
        brandId: 10, // Xiaomi
        images: [
            "/images/products/wireless-router-black.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AC1200 (867 + 300 Mbps)",
            "Chuẩn Wi-Fi": "802.11ac/n/g/b",
            "Số ăng-ten": "4 ăng-ten ngoài",
            "Cổng mạng": "1 WAN + 2 LAN Gigabit",
            "Bộ xử lý": "MT7621A dual-core",
            "Bộ nhớ": "128MB RAM + 16MB Flash",
            "App quản lý": "Mi Wi-Fi App"
        },
        inStock: true,
        stockQuantity: 35,
        rating: 4.1,
        reviewCount: 89,
        tags: ["AC1200", "Gigabit", "Budget", "Mi Router"],
        createdAt: "2023-12-20T00:00:00Z",
        updatedAt: "2023-12-20T00:00:00Z"
    },
    {
        id: 11,
        name: "Ubiquiti UniFi Dream Machine",
        description: "All-in-one security gateway với UniFi Controller tích hợp",
        price: 8990000,
        originalPrice: 9990000,
        discount: 10,
        categoryId: 1, // Router Wi-Fi
        brandId: 7, // Ubiquiti
        images: [
            "/images/products/wireless-router-black.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "Wi-Fi 6 AX3000",
            "Cổng mạng": "1 WAN + 4 LAN Gigabit",
            "Tính năng": "IDS/IPS, DPI, UniFi Controller",
            "Bộ xử lý": "Quad-core ARM Cortex-A57",
            "Bộ nhớ": "2GB RAM + 16GB eMMC",
            "Display": "1.3\" color touchscreen",
            "Mounting": "Desktop"
        },
        inStock: true,
        stockQuantity: 3,
        rating: 4.8,
        reviewCount: 12,
        tags: ["UniFi", "All-in-one", "Enterprise", "IDS/IPS"],
        createdAt: "2023-12-15T00:00:00Z",
        updatedAt: "2023-12-15T00:00:00Z"
    },
    {
        id: 12,
        name: "ASUS AiMesh AX6100 Tri-Band System",
        description: "Hệ thống mesh tri-band Wi-Fi 6 với công nghệ AiMesh",
        price: 7990000,
        originalPrice: 8990000,
        discount: 11,
        categoryId: 5, // Mesh Wi-Fi
        brandId: 2, // ASUS
        images: [
            "/images/products/mesh-wifi-system.jpg"
        ],
        specifications: {
            "Tốc độ Wi-Fi": "AX6100 (4804 + 861 + 400 Mbps)",
            "Chuẩn Wi-Fi": "802.11ax/ac/n/a/g/b",
            "Phủ sóng": "Lên đến 550m² (2 units)",
            "Số thiết bị": "100+ thiết bị",
            "Tính năng": "AiMesh, AiProtection Pro",
            "Cổng mạng": "1 WAN + 3 LAN Gigabit",
            "Bộ xử lý": "Quad-core 1.8GHz"
        },
        inStock: true,
        stockQuantity: 4,
        rating: 4.7,
        reviewCount: 19,
        tags: ["AiMesh", "Tri-band", "Wi-Fi 6", "AiProtection"],
        createdAt: "2023-12-10T00:00:00Z",
        updatedAt: "2023-12-10T00:00:00Z"
    }
];
//# sourceMappingURL=products.js.map