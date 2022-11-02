const links = [
  {
    name: "Transparency",
    submenu: true,
    sublinks: [
      {
        sublinkDrop:false,
        Head: "Executive Orders",
        HeadLink: "/transparency/executive-orders",
      },
      {
        sublinkDrop:true,
        Head: "Citizen's Charter",
        HeadLink: "/transparency/citizens-charter",
        sublink: [
          { name: "Ordinances", link: "/transparency/citizens-charter/ordinances" },
        ],
      },
      {
        sublinkDrop:false,
        Head: "FALGU",
        HeadLink: "/transparency/FALGU",
      },
      {
        sublinkDrop:false,
        Head: "GEF",
        HeadLink: "/transparency/GEF",
      },
      {
        sublinkDrop:false,
        Head: "DRRAP",
        HeadLink: "/transparency/DRRAP",
      },
      {
        sublinkDrop:false,
        Head: "FDP",
        HeadLink: "/transparency/FDP",
      },
    ],
  },
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        sublinkDrop:false,
        Head: "Real Property Tax Calculation",
        HeadLink: "/services/real-property-tax-calculation",
      },
    ],
  },
  {
    name: "About",
    submenu: true,
    sublinks: [
      {
        sublinkDrop:false,
        Head: "Organizational Structure",
        HeadLink: "/about/org-structure",
      },
      {
        sublinkDrop:false,
        Head: "Local Officials",
        HeadLink: "/about/local-officials",
      },
      {
        sublinkDrop:false,
        Head: "History",
        HeadLink: "/about/history",
      },
    ],
  },
  
];

export default links;