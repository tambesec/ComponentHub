import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cửa Hàng - NetTechPro | Thiết Bị Mạng Chuyên Nghiệp",
  description: "Khám phá bộ sưu tập thiết bị mạng đa dạng tại NetTechPro: Router, Switch, WiFi, Card mạng với giá tốt nhất",
  // other metadata
};

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;
