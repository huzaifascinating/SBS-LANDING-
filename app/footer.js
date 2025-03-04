import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, GithubOutlined, InstagramOutlined, TikTokOutlined, PhoneOutlined, UsergroupAddOutlined, CodeOutlined, ToolOutlined, InfoCircleOutlined } from "@ant-design/icons";

export default function Footer() {
  const footerSections = [
    {
      title: "Community",
      icon: <UsergroupAddOutlined />,
      links: ["Tutorials", "Documentation", "Forum"],
    },
    {
      title: "Open Source",
      icon: <CodeOutlined />,
      links: ["Download", "GitHub", "Runbot", "Translations"],
    },
    {
      title: "Services",
      icon: <ToolOutlined />,
      links: [
        "Hosting",
        "Support",
        "Upgrade",
        "Custom Developments",
        "Education",
        "Find an Accountant",
        "Find a Partner",
        "Become a Partner",
      ],
    },
    {
      title: "About Us",
      icon: <InfoCircleOutlined />,
      links: [
        "Our Company",
        "Brand Assets",
        "Contact Us",
        "Jobs",
        "Events",
        "Podcast",
        "Blog",
        "Customers",
        "Legal • Privacy • Security",
      ],
    },
  ];

  const socialLinks = [
    { icon: <FacebookOutlined />, href: "#" },
    { icon: <TwitterOutlined />, href: "#" },
    { icon: <LinkedinOutlined />, href: "#" },
    { icon: <GithubOutlined />, href: "#" },
    { icon: <InstagramOutlined />, href: "#" },
    { icon: <TikTokOutlined />, href: "#" },
    { icon: <PhoneOutlined />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-md md:text-lg font-semibold flex items-center gap-2">
                {section.icon} {section.title}
              </h3>
              <ul className="mt-2 space-y-2 text-gray-300 text-sm md:text-base">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:w-1/3">
            <p className="text-gray-300 text-sm md:text-base">
              SBS is a suite of open-source business apps covering CRM, eCommerce, accounting, inventory, project management, and more.
            </p>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              Our unique value proposition is being easy to use and fully integrated.
            </p>

            <div className="flex space-x-4 mt-4 text-lg md:text-xl">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-white transition">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm md:text-base">
          <p>
            Website made with <span className="font-bold text-white">SBS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
