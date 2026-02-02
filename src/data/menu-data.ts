
interface MenuItem {
  title: string;
  path: string;
  has_submenu?: boolean;
  sub_menus?: {
    title: string;
    path: string;
    has_inner_submenu?: boolean;
    noBorder?: boolean;
    sub_menus?: { title: string; path: string; }[];
  }[];
  noBorder?: boolean;
}[];

const menu_data: MenuItem[] = [
  { title: "About Us", has_submenu: false, path: "/about-us" },
  {
    title: "Services",
    has_submenu: true,
    path: "/services",
    sub_menus: [
      {
        title: "Website Builds",
        path: "/web-development",
        has_inner_submenu: true,
        noBorder: true,
        sub_menus: [
          { title: "Starter", path: "/web-development#starter" },
          { title: "Pro Build", path: "/web-development#pro" },
          { title: "Full Build", path: "/web-development#enterprise" },
          { title: "E-commerce", path: "/web-development#ecommerce" },
        ],
      },
      {
        title: "Website Care",
        path: "/web-care",
        has_inner_submenu: true,
        noBorder: true,
        sub_menus: [
          { title: "Reports", path: "/web-care#reports" },
          { title: "Monitoring", path: "/web-care#monitoring" },
          { title: "Updates", path: "/web-care#updates" },
          { title: "SEO", path: "/web-care#seo" },
        ],
      },
      {
        title: "Media",
        path: "/media",
        has_inner_submenu: true,
        noBorder: true,
        sub_menus: [
          { title: "Photography", path: "/media#photo" },
          { title: "Video", path: "/media#video" },
          { title: "Aerial", path: "/media#drone" },
          { title: "Media Edits", path: "/media#media-edits" },
        ],
      },
      {
        title: "Graphic Design",
        path: "/graphics",
        has_inner_submenu: true,
        noBorder: true,
        sub_menus: [
          { title: "Logos", path: "/graphics#logos" },
          { title: "Graphic Design", path: "/graphics#graphics" },
          { title: "Animations", path: "/graphics#animations" },
        ],
      },
      {
        title: "Industry Packs",
        path: "/industry-packs",
        has_inner_submenu: false,
        noBorder: false,
        sub_menus: [
          { title: "faq", path: "/faq" },
          { title: "pricing", path: "/pricing" },
          { title: "404", path: "/errors-404" },
        ],
      },
      // {
      //   title: "Account",
      //   path: "#",
      //   has_inner_submenu: true,
      //   noBorder: true,
      //   sub_menus: [
      //     { title: "sign up", path: "/sign-up" },
      //     { title: "sign in", path: "/sign-in" },
      //     { title: "reset password", path: "/reset-password" },
      //   ],
      // },
    ],
  },
  // { title: "Portfolio", has_submenu: false, path: "/portfolio" },
  {
    title: "Blog",
    has_submenu: false,
    path: "/blog",
    // sub_menus: [
    //   { title: "Blog", path: "/blog" },
    //   { title: "Blog Details", path: "/single-blog" },
    // ],
  },
];


export default menu_data;