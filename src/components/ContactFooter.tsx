"use client";

import Image from "next/image";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link as IntlLink } from "@/i18n/navigation";

const navLinks = [
  { id: "neden-sentira", key: "whySentira" },
  { id: "cozumler", key: "solutions" },
  { id: "oduller", key: "awards" },
  { id: "iletisim", key: "contact" },
] as const;

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ContactFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer
      id="iletisim"
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <IntlLink href="/" className="inline-block mb-6 group">
              <Image
                src="/logo.png"
                alt="Sentira"
                width={200}
                height={60}
                className="transition-transform group-hover:scale-105"
              />
            </IntlLink>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
              {t("description")}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/techsiderco/"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/techsider.co/"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links – navbar ile aynı menü linkleri */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ id, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleSmoothScroll(e, id)}
                    className="text-slate-600 hover:text-blue-600 text-sm transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {tNav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@sentira.com"
                  className="text-slate-600 hover:text-blue-600 text-sm transition-colors flex items-start gap-3 group"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>contact@techsider.co</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+905551234567"
                  className="text-slate-600 hover:text-blue-600 text-sm transition-colors flex items-start gap-3 group"
                >
                  <Phone
                    size={18}
                    className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>+90 507 706 7726</span>
                </a>
              </li>
              <li>
                <div className="text-slate-600 text-sm flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Türkiye</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Tagline */}
          <div className="lg:col-span-3">
            <p className="text-slate-700 text-base sm:text-md text-xl font-medium leading-relaxed">
              {t("tagline")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200">
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
              {t("copyrightPrefix")}
              <IntlLink
                href="/"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors mx-1"
              >
                Sentira
              </IntlLink>
              {t("copyrightSuffix")}
            </p>
            <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
              <IntlLink
                href="https://sentira.techsider.co"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors mx-1"
              >
                Sentira
              </IntlLink>
              {t("brandBeforeLink")}
              <IntlLink
                href="https://techsider.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors mx-1"
              >
                techsider.co
              </IntlLink>
              {t("brandAfterLink")}
            </p>

            {/*<div className="flex gap-6 text-xs sm:text-sm">
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                Kullanım Koşulları
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
