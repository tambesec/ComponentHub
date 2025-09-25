export interface Product {
  id: string
  name: string
  nameVi: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  rating: number
  reviews: number
  inStock: boolean
  features: string[]
  description: string
  descriptionVi: string
  specifications: Record<string, string>
}

export const networkProducts: Product[] = [
  {
    id: "tp-link-ax73",
    name: "TP-Link Archer AX73 AX5400 WiFi 6 Router",
    nameVi: "Router WiFi 6 TP-Link Archer AX73 AX5400",
    price: 3290000,
    originalPrice: 3890000,
    image: "/tp-link-ax73-wifi-6-router-black-modern-design.jpg",
    category: "router",
    brand: "TP-Link",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ["WiFi 6 Technology", "AX5400 Speed", "8 High-Gain Antennas", "OFDMA & MU-MIMO"],
    description:
      "Experience blazing-fast WiFi 6 speeds up to 5.4 Gbps with advanced features for seamless streaming and gaming.",
    descriptionVi:
      "Trải nghiệm tốc độ WiFi 6 siêu nhanh lên đến 5.4 Gbps với các tính năng tiên tiến cho streaming và gaming mượt mà.",
    specifications: {
      "WiFi Standard": "802.11ax/ac/n/a/g/b",
      Speed: "5400 Mbps (4804 Mbps on 5 GHz + 574 Mbps on 2.4 GHz)",
      Antennas: "8× High-Gain External Antennas",
      Ports: "1× Gigabit WAN Port, 4× Gigabit LAN Ports, 1× USB 3.0 Port",
    },
  },
  {
    id: "asus-ax6000",
    name: "ASUS RT-AX88U AX6000 Dual Band WiFi 6 Router",
    nameVi: "Router WiFi 6 ASUS RT-AX88U AX6000 Dual Band",
    price: 5490000,
    originalPrice: 6290000,
    image: "/asus-rt-ax88u-black-gaming-router-with-red-accents.jpg",
    category: "router",
    brand: "ASUS",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    features: ["AX6000 Speed", "Gaming Accelerator", "AiMesh Support", "Lifetime Free AiProtection"],
    description:
      "Ultimate gaming router with AX6000 speeds, advanced gaming features, and comprehensive network security.",
    descriptionVi: "Router gaming tối ưu với tốc độ AX6000, tính năng gaming tiên tiến và bảo mật mạng toàn diện.",
    specifications: {
      "WiFi Standard": "802.11ax",
      Speed: "6000 Mbps (4804 Mbps on 5 GHz + 1148 Mbps on 2.4 GHz)",
      Antennas: "4× External Antennas",
      Ports: "1× 2.5G WAN/LAN Port, 1× Gigabit WAN Port, 8× Gigabit LAN Ports",
    },
  },
  {
    id: "netgear-nighthawk-ax12",
    name: "NETGEAR Nighthawk AX12 12-Stream WiFi 6 Router",
    nameVi: "Router WiFi 6 NETGEAR Nighthawk AX12 12-Stream",
    price: 7890000,
    image: "/netgear-nighthawk-black-angular-router-with-blue-l.jpg",
    category: "router",
    brand: "NETGEAR",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ["12-Stream WiFi 6", "Dynamic QoS", "Smart Connect", "Circle Smart Parental Controls"],
    description:
      "Premium 12-stream WiFi 6 router delivering ultra-fast speeds and advanced network management features.",
    descriptionVi: "Router WiFi 6 cao cấp 12-stream mang lại tốc độ siêu nhanh và tính năng quản lý mạng tiên tiến.",
    specifications: {
      "WiFi Standard": "802.11ax",
      Speed: "10.8 Gbps",
      Antennas: "12× High-Performance Antennas",
      Ports: "1× 2.5G Ethernet Port, 1× Gigabit WAN Port, 4× Gigabit LAN Ports",
    },
  },
  {
    id: "hikvision-ds-2cd2385g1",
    name: "Hikvision DS-2CD2385G1-I 8MP 4K Network Camera",
    nameVi: "Camera IP 4K Hikvision DS-2CD2385G1-I 8MP",
    price: 2890000,
    originalPrice: 3290000,
    image: "/hikvision-white-dome-security-camera-with-infrared.jpg",
    category: "camera",
    brand: "Hikvision",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ["4K Ultra HD", "H.265+ Compression", "30m IR Range", "IP67 Weatherproof"],
    description: "Professional 4K network camera with advanced imaging technology and robust weatherproof design.",
    descriptionVi: "Camera mạng 4K chuyên nghiệp với công nghệ hình ảnh tiên tiến và thiết kế chống thời tiết bền bỉ.",
    specifications: {
      Resolution: "3840 × 2160 @ 20fps",
      Lens: "2.8mm, 4mm, 6mm fixed lens",
      "IR Range": "Up to 30m",
      Storage: "Built-in micro SD/SDHC/SDXC slot",
    },
  },
  {
    id: "dahua-ipc-hfw2831s",
    name: "Dahua IPC-HFW2831S-S-S2 8MP 4K Bullet Camera",
    nameVi: "Camera IP 4K Dahua IPC-HFW2831S-S-S2 8MP Bullet",
    price: 2190000,
    image: "/dahua-white-bullet-security-camera-with-infrared-l.jpg",
    category: "camera",
    brand: "Dahua",
    rating: 4.6,
    reviews: 87,
    inStock: true,
    features: ["4K Resolution", "Smart IR", "WDR Technology", "IP67 Protection"],
    description: "High-performance 4K bullet camera with intelligent features and superior night vision capabilities.",
    descriptionVi: "Camera bullet 4K hiệu suất cao với tính năng thông minh và khả năng quan sát ban đêm vượt trội.",
    specifications: {
      Resolution: "3840 × 2160 @ 25/30fps",
      Lens: "2.8mm fixed lens",
      "IR Range": "Up to 40m",
      Power: "12V DC ± 25%, PoE+",
    },
  },
  {
    id: "cisco-sg350-28",
    name: "Cisco SG350-28 28-Port Gigabit Managed Switch",
    nameVi: "Switch Gigabit Cisco SG350-28 28 Cổng Quản Lý",
    price: 8990000,
    image: "/cisco-black-rack-mount-network-switch-with-multipl.jpg",
    category: "switch",
    brand: "Cisco",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    features: ["28 Gigabit Ports", "Layer 3 Static Routing", "Advanced Security", "Energy Efficient"],
    description:
      "Enterprise-grade managed switch with advanced Layer 3 features and comprehensive security capabilities.",
    descriptionVi: "Switch quản lý cấp doanh nghiệp với tính năng Layer 3 tiên tiến và khả năng bảo mật toàn diện.",
    specifications: {
      Ports: "24× 10/100/1000 + 2× Combo mini-GBIC + 2× 10G SFP+",
      "Switching Capacity": "128 Gbps",
      "MAC Address Table": "16K",
      "Power Consumption": "37W",
    },
  },
]

export const getProductById = (id: string): Product | undefined => {
  return networkProducts.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return networkProducts.filter((product) => product.category === category)
}
