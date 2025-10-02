import React from "react";git 
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white overflow-hidden">
      <div className="max-w-[1241px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-[60px] xl:justify-between pt-[64px] pb-10">
          <div className="max-w-[358px] w-full">
            <h2 className="mb-[27px] text-[18px] font-bold text-black uppercase">
              PEE - 1st thiết bị mạng
            </h2>

            <div className="mb-[30px]">
              <p className="text-[14px] text-black uppercase mb-2">
                HOTLINE 24/7
              </p>
              <p className="text-[30px] font-bold text-[#1aba1a] mb-4">
                (025) 3686 25 16
              </p>
              <p className="text-[14px] text-black mb-2">
                Học viện công nghệ bưu chính viễn thông
              </p>
              <p className="text-[14px] text-black">
                n22dcat047@student.ptithcm.edu.vn
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-[35px] h-[35px] bg-[#e1e3eb] rounded-[17.5px] flex items-center justify-center ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <svg className="fill-current w-4 h-4" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-[35px] h-[35px] bg-[#e1e3eb] rounded-[17.5px] flex items-center justify-center ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <svg className="fill-current w-4 h-4" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-[35px] h-[35px] bg-[#e1e3eb] rounded-[17.5px] flex items-center justify-center ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <svg className="fill-current w-4 h-4" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-[35px] h-[35px] bg-[#e1e3eb] rounded-[17.5px] flex items-center justify-center ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <svg className="fill-current w-4 h-4" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-[35px] h-[35px] bg-[#e1e3eb] rounded-[17.5px] flex items-center justify-center ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <svg className="fill-current w-4 h-4" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-[30px] text-[18px] font-bold text-black uppercase">
              Danh mục
            </h2>
            <ul className="flex flex-col gap-[15px] text-[14px] text-[#666666] capitalize">
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Router</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Switch</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Kích sóng wifi</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Hub-switch</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Card mạng</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">USB wifi</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Camera</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Phụ kiện mạng</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-[30px] text-[18px] font-bold text-black uppercase">
              Tài khoản
            </h2>
            <ul className="flex flex-col gap-[15px] text-[14px] text-[#666666] capitalize">
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Tài khoản của tôi</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Đăng nhập / Đăng ký</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Giỏ hàng</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Danh sách yêu thích</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Cửa hàng</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-[30px] text-[18px] font-bold text-black uppercase">
              Liên kết nhanh
            </h2>
            <ul className="flex flex-col gap-[15px] text-[14px] text-[#666666] capitalize">
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Chính sách bảo mật</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Chính sách hoàn trả</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Điều khoản sử dụng</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Câu hỏi thường gặp</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Liên hệ</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-[30px] text-[18px] font-bold text-black uppercase">
              Hỗ trợ khách hàng
            </h2>
            <ul className="flex flex-col gap-[15px] text-[14px] text-[#666666] capitalize">
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Hướng dẫn mua hàng</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Phương thức thanh toán</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Chính sách vận chuyển</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Chính sách bảo hành</a></li>
              <li><a className="ease-out duration-200 hover:text-blue" href="#">Hỗ trợ kỹ thuật</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5 xl:py-7.5 bg-gray-1">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="text-dark font-medium">
              &copy; {year}. Bản quyền thuộc về PEE Network Equipment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">Chúng tôi chấp nhận:</p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#" aria-label="thanh toán bằng thẻ visa">
                  <Image
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="thanh toán bằng paypal">
                  <Image
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </a>
                <a href="#" aria-label="thanh toán bằng master card">
                  <Image
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="thanh toán bằng apple pay">
                  <Image
                    src="/images/payment/payment-04.svg"
                    alt="apple pay"
                    width={52.94}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="thanh toán bằng google pay">
                  <Image
                    src="/images/payment/payment-05.svg"
                    alt="google pay"
                    width={56}
                    height={22}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
