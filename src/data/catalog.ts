export interface CatalogItem {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  image: string;
  alt: string;
  featured: boolean;
  order: number;
}

export const CATEGORIES = [
  {
    "id": "bridal-formal",
    "name": "Bridal & Formalwear",
    "tag": "Bridal"
  },
  {
    "id": "suits-tailoring",
    "name": "Suits & Tailoring",
    "tag": "Suits"
  },
  {
    "id": "everyday-alterations",
    "name": "Everyday Alterations",
    "tag": "Everyday"
  },
  {
    "id": "creative-custom",
    "name": "Creative & Custom Projects",
    "tag": "Custom"
  },
  {
    "id": "uniforms-workwear",
    "name": "Uniforms & Workwear",
    "tag": "Workwear"
  },
  {
    "id": "leather-accessories",
    "name": "Leather & Accessories",
    "tag": "Leather"
  }
] as const;

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "king-item-001",
    "title": "Precision Hemming & Silhouette Adjustment #1",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_12tdat12tdat12td.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #1 - King's Alterations Austin TX",
    "featured": true,
    "order": 1
  },
  {
    "id": "king-item-002",
    "title": "Tailored Wedding Gown Fitting #2",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_1eh3o51eh3o51eh3.jpg",
    "alt": "Tailored Wedding Gown Fitting #2 - King's Alterations Austin TX",
    "featured": true,
    "order": 2
  },
  {
    "id": "king-item-003",
    "title": "Custom Suit Jacket Tapering #3",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_1ui3tu1ui3tu1ui3.jpg",
    "alt": "Custom Suit Jacket Tapering #3 - King's Alterations Austin TX",
    "featured": true,
    "order": 3
  },
  {
    "id": "king-item-004",
    "title": "Formal Evening Gown Alteration #4",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_2cuo2i2cuo2i2cuo.jpg",
    "alt": "Formal Evening Gown Alteration #4 - King's Alterations Austin TX",
    "featured": true,
    "order": 4
  },
  {
    "id": "king-item-005",
    "title": "Bespoke Waist & Inseam Tailoring #5",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_2h3udv2h3udv2h3u.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #5 - King's Alterations Austin TX",
    "featured": true,
    "order": 5
  },
  {
    "id": "king-item-006",
    "title": "Bridal Lace & Train Reconstruction #6",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_2jbvmo2jbvmo2jbv.jpg",
    "alt": "Bridal Lace & Train Reconstruction #6 - King's Alterations Austin TX",
    "featured": true,
    "order": 6
  },
  {
    "id": "king-item-007",
    "title": "Executive Blazer Sleeve Adjustment #7",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_2wsba02wsba02wsb.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #7 - King's Alterations Austin TX",
    "featured": true,
    "order": 7
  },
  {
    "id": "king-item-008",
    "title": "Delicate Silk Dress Resizing #8",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_2x3ng62x3ng62x3n.jpg",
    "alt": "Delicate Silk Dress Resizing #8 - King's Alterations Austin TX",
    "featured": true,
    "order": 8
  },
  {
    "id": "king-item-009",
    "title": "Creative Costume & Cosplay Detailing #9",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_2z4p9b2z4p9b2z4p.jpg",
    "alt": "Creative Costume & Cosplay Detailing #9 - King's Alterations Austin TX",
    "featured": true,
    "order": 9
  },
  {
    "id": "king-item-010",
    "title": "Leather Garment & Hardware Restoration #10",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_34kc3434kc3434kc.jpg",
    "alt": "Leather Garment & Hardware Restoration #10 - King's Alterations Austin TX",
    "featured": true,
    "order": 10
  },
  {
    "id": "king-item-011",
    "title": "Custom Canvas Bag Reinforcement #11",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_3n75h23n75h23n75.jpg",
    "alt": "Custom Canvas Bag Reinforcement #11 - King's Alterations Austin TX",
    "featured": true,
    "order": 11
  },
  {
    "id": "king-item-012",
    "title": "Prom Dress Bodice & Strap Fitting #12",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_3zht4z3zht4z3zht.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #12 - King's Alterations Austin TX",
    "featured": true,
    "order": 12
  },
  {
    "id": "king-item-013",
    "title": "Classic Tuxedo Refinement #13",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_4pzoco4pzoco4pzo.jpg",
    "alt": "Classic Tuxedo Refinement #13 - King's Alterations Austin TX",
    "featured": false,
    "order": 13
  },
  {
    "id": "king-item-014",
    "title": "Heavy Duty Denim Repair & Taper #14",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_4y55ts4y55ts4y55.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #14 - King's Alterations Austin TX",
    "featured": false,
    "order": 14
  },
  {
    "id": "king-item-015",
    "title": "Specialty Fabric & Activewear Seaming #15",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_5dl6f5dl6f5dl6f5.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #15 - King's Alterations Austin TX",
    "featured": false,
    "order": 15
  },
  {
    "id": "king-item-016",
    "title": "Precision Hemming & Silhouette Adjustment #16",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_66jr2m66jr2m66jr.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #16 - King's Alterations Austin TX",
    "featured": false,
    "order": 16
  },
  {
    "id": "king-item-017",
    "title": "Tailored Wedding Gown Fitting #17",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_6e5v2v6e5v2v6e5v.jpg",
    "alt": "Tailored Wedding Gown Fitting #17 - King's Alterations Austin TX",
    "featured": false,
    "order": 17
  },
  {
    "id": "king-item-018",
    "title": "Custom Suit Jacket Tapering #18",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_6qni626qni626qni.jpg",
    "alt": "Custom Suit Jacket Tapering #18 - King's Alterations Austin TX",
    "featured": false,
    "order": 18
  },
  {
    "id": "king-item-019",
    "title": "Formal Evening Gown Alteration #19",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_6tbfz06tbfz06tbf.jpg",
    "alt": "Formal Evening Gown Alteration #19 - King's Alterations Austin TX",
    "featured": false,
    "order": 19
  },
  {
    "id": "king-item-020",
    "title": "Bespoke Waist & Inseam Tailoring #20",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_744zhn744zhn744z.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #20 - King's Alterations Austin TX",
    "featured": false,
    "order": 20
  },
  {
    "id": "king-item-021",
    "title": "Bridal Lace & Train Reconstruction #21",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_7jspuv7jspuv7jsp.jpg",
    "alt": "Bridal Lace & Train Reconstruction #21 - King's Alterations Austin TX",
    "featured": false,
    "order": 21
  },
  {
    "id": "king-item-022",
    "title": "Executive Blazer Sleeve Adjustment #22",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_7lh7q67lh7q67lh7.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #22 - King's Alterations Austin TX",
    "featured": false,
    "order": 22
  },
  {
    "id": "king-item-023",
    "title": "Delicate Silk Dress Resizing #23",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_7tkp9q7tkp9q7tkp.jpg",
    "alt": "Delicate Silk Dress Resizing #23 - King's Alterations Austin TX",
    "featured": false,
    "order": 23
  },
  {
    "id": "king-item-024",
    "title": "Creative Costume & Cosplay Detailing #24",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_7tn1mp7tn1mp7tn1.jpg",
    "alt": "Creative Costume & Cosplay Detailing #24 - King's Alterations Austin TX",
    "featured": false,
    "order": 24
  },
  {
    "id": "king-item-025",
    "title": "Leather Garment & Hardware Restoration #25",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_7togao7togao7tog.jpg",
    "alt": "Leather Garment & Hardware Restoration #25 - King's Alterations Austin TX",
    "featured": false,
    "order": 25
  },
  {
    "id": "king-item-026",
    "title": "Custom Canvas Bag Reinforcement #26",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_7tvb4g7tvb4g7tvb.jpg",
    "alt": "Custom Canvas Bag Reinforcement #26 - King's Alterations Austin TX",
    "featured": false,
    "order": 26
  },
  {
    "id": "king-item-027",
    "title": "Prom Dress Bodice & Strap Fitting #27",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_87zeqf87zeqf87ze.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #27 - King's Alterations Austin TX",
    "featured": false,
    "order": 27
  },
  {
    "id": "king-item-028",
    "title": "Classic Tuxedo Refinement #28",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_8oiprg8oiprg8oip.jpg",
    "alt": "Classic Tuxedo Refinement #28 - King's Alterations Austin TX",
    "featured": false,
    "order": 28
  },
  {
    "id": "king-item-029",
    "title": "Heavy Duty Denim Repair & Taper #29",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_9ht56z9ht56z9ht5.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #29 - King's Alterations Austin TX",
    "featured": false,
    "order": 29
  },
  {
    "id": "king-item-030",
    "title": "Specialty Fabric & Activewear Seaming #30",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_9jy71b9jy71b9jy7.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #30 - King's Alterations Austin TX",
    "featured": false,
    "order": 30
  },
  {
    "id": "king-item-031",
    "title": "Precision Hemming & Silhouette Adjustment #31",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_9mtwtt9mtwtt9mtw.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #31 - King's Alterations Austin TX",
    "featured": false,
    "order": 31
  },
  {
    "id": "king-item-032",
    "title": "Tailored Wedding Gown Fitting #32",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_9qsjeh9qsjeh9qsj.jpg",
    "alt": "Tailored Wedding Gown Fitting #32 - King's Alterations Austin TX",
    "featured": false,
    "order": 32
  },
  {
    "id": "king-item-033",
    "title": "Custom Suit Jacket Tapering #33",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_9whskd9whskd9whs.jpg",
    "alt": "Custom Suit Jacket Tapering #33 - King's Alterations Austin TX",
    "featured": false,
    "order": 33
  },
  {
    "id": "king-item-034",
    "title": "Formal Evening Gown Alteration #34",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_9xwe0c9xwe0c9xwe.jpg",
    "alt": "Formal Evening Gown Alteration #34 - King's Alterations Austin TX",
    "featured": false,
    "order": 34
  },
  {
    "id": "king-item-035",
    "title": "Bespoke Waist & Inseam Tailoring #35",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_a5kq63a5kq63a5kq.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #35 - King's Alterations Austin TX",
    "featured": false,
    "order": 35
  },
  {
    "id": "king-item-036",
    "title": "Bridal Lace & Train Reconstruction #36",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_a5pxx1a5pxx1a5px.jpg",
    "alt": "Bridal Lace & Train Reconstruction #36 - King's Alterations Austin TX",
    "featured": false,
    "order": 36
  },
  {
    "id": "king-item-037",
    "title": "Executive Blazer Sleeve Adjustment #37",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_ael2kael2kael2ka.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #37 - King's Alterations Austin TX",
    "featured": false,
    "order": 37
  },
  {
    "id": "king-item-038",
    "title": "Delicate Silk Dress Resizing #38",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_ajzwf1ajzwf1ajzw.jpg",
    "alt": "Delicate Silk Dress Resizing #38 - King's Alterations Austin TX",
    "featured": false,
    "order": 38
  },
  {
    "id": "king-item-039",
    "title": "Creative Costume & Cosplay Detailing #39",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_amsow1amsow1amso.jpg",
    "alt": "Creative Costume & Cosplay Detailing #39 - King's Alterations Austin TX",
    "featured": false,
    "order": 39
  },
  {
    "id": "king-item-040",
    "title": "Leather Garment & Hardware Restoration #40",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_artjmhartjmhartj.jpg",
    "alt": "Leather Garment & Hardware Restoration #40 - King's Alterations Austin TX",
    "featured": false,
    "order": 40
  },
  {
    "id": "king-item-041",
    "title": "Custom Canvas Bag Reinforcement #41",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_beearobeearobeea.jpg",
    "alt": "Custom Canvas Bag Reinforcement #41 - King's Alterations Austin TX",
    "featured": false,
    "order": 41
  },
  {
    "id": "king-item-042",
    "title": "Prom Dress Bodice & Strap Fitting #42",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_bemn3bbemn3bbemn.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #42 - King's Alterations Austin TX",
    "featured": false,
    "order": 42
  },
  {
    "id": "king-item-043",
    "title": "Classic Tuxedo Refinement #43",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_bmoamkbmoamkbmoa.jpg",
    "alt": "Classic Tuxedo Refinement #43 - King's Alterations Austin TX",
    "featured": false,
    "order": 43
  },
  {
    "id": "king-item-044",
    "title": "Heavy Duty Denim Repair & Taper #44",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_c0oj4gc0oj4gc0oj.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #44 - King's Alterations Austin TX",
    "featured": false,
    "order": 44
  },
  {
    "id": "king-item-045",
    "title": "Specialty Fabric & Activewear Seaming #45",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_csf1zocsf1zocsf1.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #45 - King's Alterations Austin TX",
    "featured": false,
    "order": 45
  },
  {
    "id": "king-item-046",
    "title": "Precision Hemming & Silhouette Adjustment #46",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_d2v3zvd2v3zvd2v3.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #46 - King's Alterations Austin TX",
    "featured": false,
    "order": 46
  },
  {
    "id": "king-item-047",
    "title": "Tailored Wedding Gown Fitting #47",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_d5avdxd5avdxd5av.jpg",
    "alt": "Tailored Wedding Gown Fitting #47 - King's Alterations Austin TX",
    "featured": false,
    "order": 47
  },
  {
    "id": "king-item-048",
    "title": "Custom Suit Jacket Tapering #48",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_dbl2bcdbl2bcdbl2.jpg",
    "alt": "Custom Suit Jacket Tapering #48 - King's Alterations Austin TX",
    "featured": false,
    "order": 48
  },
  {
    "id": "king-item-049",
    "title": "Formal Evening Gown Alteration #49",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_dmfz16dmfz16dmfz.jpg",
    "alt": "Formal Evening Gown Alteration #49 - King's Alterations Austin TX",
    "featured": false,
    "order": 49
  },
  {
    "id": "king-item-050",
    "title": "Bespoke Waist & Inseam Tailoring #50",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_dtd29ddtd29ddtd2.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #50 - King's Alterations Austin TX",
    "featured": false,
    "order": 50
  },
  {
    "id": "king-item-051",
    "title": "Bridal Lace & Train Reconstruction #51",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_ebvijyebvijyebvi.jpg",
    "alt": "Bridal Lace & Train Reconstruction #51 - King's Alterations Austin TX",
    "featured": false,
    "order": 51
  },
  {
    "id": "king-item-052",
    "title": "Executive Blazer Sleeve Adjustment #52",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_ey1sfey1sfey1sfe.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #52 - King's Alterations Austin TX",
    "featured": false,
    "order": 52
  },
  {
    "id": "king-item-053",
    "title": "Delicate Silk Dress Resizing #53",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_eyztv3eyztv3eyzt.jpg",
    "alt": "Delicate Silk Dress Resizing #53 - King's Alterations Austin TX",
    "featured": false,
    "order": 53
  },
  {
    "id": "king-item-054",
    "title": "Creative Costume & Cosplay Detailing #54",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_f185tof185tof185.jpg",
    "alt": "Creative Costume & Cosplay Detailing #54 - King's Alterations Austin TX",
    "featured": false,
    "order": 54
  },
  {
    "id": "king-item-055",
    "title": "Leather Garment & Hardware Restoration #55",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_f2i395f2i395f2i3.jpg",
    "alt": "Leather Garment & Hardware Restoration #55 - King's Alterations Austin TX",
    "featured": false,
    "order": 55
  },
  {
    "id": "king-item-056",
    "title": "Custom Canvas Bag Reinforcement #56",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_f32d5f32d5f32d5f.jpg",
    "alt": "Custom Canvas Bag Reinforcement #56 - King's Alterations Austin TX",
    "featured": false,
    "order": 56
  },
  {
    "id": "king-item-057",
    "title": "Prom Dress Bodice & Strap Fitting #57",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_fj69hfj69hfj69hf.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #57 - King's Alterations Austin TX",
    "featured": false,
    "order": 57
  },
  {
    "id": "king-item-058",
    "title": "Classic Tuxedo Refinement #58",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_fns8j7fns8j7fns8.jpg",
    "alt": "Classic Tuxedo Refinement #58 - King's Alterations Austin TX",
    "featured": false,
    "order": 58
  },
  {
    "id": "king-item-059",
    "title": "Heavy Duty Denim Repair & Taper #59",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_fryfeffryfeffryf.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #59 - King's Alterations Austin TX",
    "featured": false,
    "order": 59
  },
  {
    "id": "king-item-060",
    "title": "Specialty Fabric & Activewear Seaming #60",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_fuwe30fuwe30fuwe.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #60 - King's Alterations Austin TX",
    "featured": false,
    "order": 60
  },
  {
    "id": "king-item-061",
    "title": "Precision Hemming & Silhouette Adjustment #61",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_fuwnqqfuwnqqfuwn.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #61 - King's Alterations Austin TX",
    "featured": false,
    "order": 61
  },
  {
    "id": "king-item-062",
    "title": "Tailored Wedding Gown Fitting #62",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_fzsxobfzsxobfzsx.jpg",
    "alt": "Tailored Wedding Gown Fitting #62 - King's Alterations Austin TX",
    "featured": false,
    "order": 62
  },
  {
    "id": "king-item-063",
    "title": "Custom Suit Jacket Tapering #63",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_g25470g25470g254.jpg",
    "alt": "Custom Suit Jacket Tapering #63 - King's Alterations Austin TX",
    "featured": false,
    "order": 63
  },
  {
    "id": "king-item-064",
    "title": "Formal Evening Gown Alteration #64",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_g45s54g45s54g45s.jpg",
    "alt": "Formal Evening Gown Alteration #64 - King's Alterations Austin TX",
    "featured": false,
    "order": 64
  },
  {
    "id": "king-item-065",
    "title": "Bespoke Waist & Inseam Tailoring #65",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_ge394kge394kge39.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #65 - King's Alterations Austin TX",
    "featured": false,
    "order": 65
  },
  {
    "id": "king-item-066",
    "title": "Bridal Lace & Train Reconstruction #66",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_gmc8cagmc8cagmc8.jpg",
    "alt": "Bridal Lace & Train Reconstruction #66 - King's Alterations Austin TX",
    "featured": false,
    "order": 66
  },
  {
    "id": "king-item-067",
    "title": "Executive Blazer Sleeve Adjustment #67",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_gwznw9gwznw9gwzn.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #67 - King's Alterations Austin TX",
    "featured": false,
    "order": 67
  },
  {
    "id": "king-item-068",
    "title": "Delicate Silk Dress Resizing #68",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_ho3z2lho3z2lho3z.jpg",
    "alt": "Delicate Silk Dress Resizing #68 - King's Alterations Austin TX",
    "featured": false,
    "order": 68
  },
  {
    "id": "king-item-069",
    "title": "Creative Costume & Cosplay Detailing #69",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_hy98rwhy98rwhy98.jpg",
    "alt": "Creative Costume & Cosplay Detailing #69 - King's Alterations Austin TX",
    "featured": false,
    "order": 69
  },
  {
    "id": "king-item-070",
    "title": "Leather Garment & Hardware Restoration #70",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_i8mha9i8mha9i8mh.jpg",
    "alt": "Leather Garment & Hardware Restoration #70 - King's Alterations Austin TX",
    "featured": false,
    "order": 70
  },
  {
    "id": "king-item-071",
    "title": "Custom Canvas Bag Reinforcement #71",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_iocoupiocoupioco.jpg",
    "alt": "Custom Canvas Bag Reinforcement #71 - King's Alterations Austin TX",
    "featured": false,
    "order": 71
  },
  {
    "id": "king-item-072",
    "title": "Prom Dress Bodice & Strap Fitting #72",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_k9bjd3k9bjd3k9bj.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #72 - King's Alterations Austin TX",
    "featured": false,
    "order": 72
  },
  {
    "id": "king-item-073",
    "title": "Classic Tuxedo Refinement #73",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_kbtdb3kbtdb3kbtd.jpg",
    "alt": "Classic Tuxedo Refinement #73 - King's Alterations Austin TX",
    "featured": false,
    "order": 73
  },
  {
    "id": "king-item-074",
    "title": "Heavy Duty Denim Repair & Taper #74",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_l25t0ul25t0ul25t.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #74 - King's Alterations Austin TX",
    "featured": false,
    "order": 74
  },
  {
    "id": "king-item-075",
    "title": "Specialty Fabric & Activewear Seaming #75",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_lir0smlir0smlir0.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #75 - King's Alterations Austin TX",
    "featured": false,
    "order": 75
  },
  {
    "id": "king-item-076",
    "title": "Precision Hemming & Silhouette Adjustment #76",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_lis3wolis3wolis3.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #76 - King's Alterations Austin TX",
    "featured": false,
    "order": 76
  },
  {
    "id": "king-item-077",
    "title": "Tailored Wedding Gown Fitting #77",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_lklefilklefilkle.jpg",
    "alt": "Tailored Wedding Gown Fitting #77 - King's Alterations Austin TX",
    "featured": false,
    "order": 77
  },
  {
    "id": "king-item-078",
    "title": "Custom Suit Jacket Tapering #78",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_m3l4bom3l4bom3l4.jpg",
    "alt": "Custom Suit Jacket Tapering #78 - King's Alterations Austin TX",
    "featured": false,
    "order": 78
  },
  {
    "id": "king-item-079",
    "title": "Formal Evening Gown Alteration #79",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_mjdetkmjdetkmjde.jpg",
    "alt": "Formal Evening Gown Alteration #79 - King's Alterations Austin TX",
    "featured": false,
    "order": 79
  },
  {
    "id": "king-item-080",
    "title": "Bespoke Waist & Inseam Tailoring #80",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_mso0tjmso0tjmso0.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #80 - King's Alterations Austin TX",
    "featured": false,
    "order": 80
  },
  {
    "id": "king-item-081",
    "title": "Bridal Lace & Train Reconstruction #81",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_mtg0szmtg0szmtg0.jpg",
    "alt": "Bridal Lace & Train Reconstruction #81 - King's Alterations Austin TX",
    "featured": false,
    "order": 81
  },
  {
    "id": "king-item-082",
    "title": "Executive Blazer Sleeve Adjustment #82",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_mxhedjmxhedjmxhe.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #82 - King's Alterations Austin TX",
    "featured": false,
    "order": 82
  },
  {
    "id": "king-item-083",
    "title": "Delicate Silk Dress Resizing #83",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_n7o4hln7o4hln7o4.jpg",
    "alt": "Delicate Silk Dress Resizing #83 - King's Alterations Austin TX",
    "featured": false,
    "order": 83
  },
  {
    "id": "king-item-084",
    "title": "Creative Costume & Cosplay Detailing #84",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_nznokonznokonzno.jpg",
    "alt": "Creative Costume & Cosplay Detailing #84 - King's Alterations Austin TX",
    "featured": false,
    "order": 84
  },
  {
    "id": "king-item-085",
    "title": "Leather Garment & Hardware Restoration #85",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_o2wu6ro2wu6ro2wu.jpg",
    "alt": "Leather Garment & Hardware Restoration #85 - King's Alterations Austin TX",
    "featured": false,
    "order": 85
  },
  {
    "id": "king-item-086",
    "title": "Custom Canvas Bag Reinforcement #86",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_o6btemo6btemo6bt.jpg",
    "alt": "Custom Canvas Bag Reinforcement #86 - King's Alterations Austin TX",
    "featured": false,
    "order": 86
  },
  {
    "id": "king-item-087",
    "title": "Prom Dress Bodice & Strap Fitting #87",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_ofnc8aofnc8aofnc.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #87 - King's Alterations Austin TX",
    "featured": false,
    "order": 87
  },
  {
    "id": "king-item-088",
    "title": "Classic Tuxedo Refinement #88",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_os9fnmos9fnmos9f.jpg",
    "alt": "Classic Tuxedo Refinement #88 - King's Alterations Austin TX",
    "featured": false,
    "order": 88
  },
  {
    "id": "king-item-089",
    "title": "Heavy Duty Denim Repair & Taper #89",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_p5kfllp5kfllp5kf.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #89 - King's Alterations Austin TX",
    "featured": false,
    "order": 89
  },
  {
    "id": "king-item-090",
    "title": "Specialty Fabric & Activewear Seaming #90",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_p7w8z0p7w8z0p7w8.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #90 - King's Alterations Austin TX",
    "featured": false,
    "order": 90
  },
  {
    "id": "king-item-091",
    "title": "Precision Hemming & Silhouette Adjustment #91",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_p7zj92p7zj92p7zj.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #91 - King's Alterations Austin TX",
    "featured": false,
    "order": 91
  },
  {
    "id": "king-item-092",
    "title": "Tailored Wedding Gown Fitting #92",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_pbqak8pbqak8pbqa.jpg",
    "alt": "Tailored Wedding Gown Fitting #92 - King's Alterations Austin TX",
    "featured": false,
    "order": 92
  },
  {
    "id": "king-item-093",
    "title": "Custom Suit Jacket Tapering #93",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_pd3cz6pd3cz6pd3c.jpg",
    "alt": "Custom Suit Jacket Tapering #93 - King's Alterations Austin TX",
    "featured": false,
    "order": 93
  },
  {
    "id": "king-item-094",
    "title": "Formal Evening Gown Alteration #94",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_pgmlwvpgmlwvpgml (1).jpg",
    "alt": "Formal Evening Gown Alteration #94 - King's Alterations Austin TX",
    "featured": false,
    "order": 94
  },
  {
    "id": "king-item-095",
    "title": "Bespoke Waist & Inseam Tailoring #95",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_pgmlwvpgmlwvpgml.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #95 - King's Alterations Austin TX",
    "featured": false,
    "order": 95
  },
  {
    "id": "king-item-096",
    "title": "Bridal Lace & Train Reconstruction #96",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_pmqtkvpmqtkvpmqt.jpg",
    "alt": "Bridal Lace & Train Reconstruction #96 - King's Alterations Austin TX",
    "featured": false,
    "order": 96
  },
  {
    "id": "king-item-097",
    "title": "Executive Blazer Sleeve Adjustment #97",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_q1vvihq1vvihq1vv.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #97 - King's Alterations Austin TX",
    "featured": false,
    "order": 97
  },
  {
    "id": "king-item-098",
    "title": "Delicate Silk Dress Resizing #98",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_q8h5k7q8h5k7q8h5.jpg",
    "alt": "Delicate Silk Dress Resizing #98 - King's Alterations Austin TX",
    "featured": false,
    "order": 98
  },
  {
    "id": "king-item-099",
    "title": "Creative Costume & Cosplay Detailing #99",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_qg0pt4qg0pt4qg0p.jpg",
    "alt": "Creative Costume & Cosplay Detailing #99 - King's Alterations Austin TX",
    "featured": false,
    "order": 99
  },
  {
    "id": "king-item-100",
    "title": "Leather Garment & Hardware Restoration #100",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_qjxxgmqjxxgmqjxx.jpg",
    "alt": "Leather Garment & Hardware Restoration #100 - King's Alterations Austin TX",
    "featured": false,
    "order": 100
  },
  {
    "id": "king-item-101",
    "title": "Custom Canvas Bag Reinforcement #101",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_qqt4q9qqt4q9qqt4.jpg",
    "alt": "Custom Canvas Bag Reinforcement #101 - King's Alterations Austin TX",
    "featured": false,
    "order": 101
  },
  {
    "id": "king-item-102",
    "title": "Prom Dress Bodice & Strap Fitting #102",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_qwprbkqwprbkqwpr.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #102 - King's Alterations Austin TX",
    "featured": false,
    "order": 102
  },
  {
    "id": "king-item-103",
    "title": "Classic Tuxedo Refinement #103",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_r0f7aur0f7aur0f7.jpg",
    "alt": "Classic Tuxedo Refinement #103 - King's Alterations Austin TX",
    "featured": false,
    "order": 103
  },
  {
    "id": "king-item-104",
    "title": "Heavy Duty Denim Repair & Taper #104",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_r7upu9r7upu9r7up.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #104 - King's Alterations Austin TX",
    "featured": false,
    "order": 104
  },
  {
    "id": "king-item-105",
    "title": "Specialty Fabric & Activewear Seaming #105",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_rjns16rjns16rjns.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #105 - King's Alterations Austin TX",
    "featured": false,
    "order": 105
  },
  {
    "id": "king-item-106",
    "title": "Precision Hemming & Silhouette Adjustment #106",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_rt1le0rt1le0rt1l.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #106 - King's Alterations Austin TX",
    "featured": false,
    "order": 106
  },
  {
    "id": "king-item-107",
    "title": "Tailored Wedding Gown Fitting #107",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_ru50s0ru50s0ru50.jpg",
    "alt": "Tailored Wedding Gown Fitting #107 - King's Alterations Austin TX",
    "featured": false,
    "order": 107
  },
  {
    "id": "king-item-108",
    "title": "Custom Suit Jacket Tapering #108",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_rujyjerujyjerujy.jpg",
    "alt": "Custom Suit Jacket Tapering #108 - King's Alterations Austin TX",
    "featured": false,
    "order": 108
  },
  {
    "id": "king-item-109",
    "title": "Formal Evening Gown Alteration #109",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_rysi3orysi3orysi.jpg",
    "alt": "Formal Evening Gown Alteration #109 - King's Alterations Austin TX",
    "featured": false,
    "order": 109
  },
  {
    "id": "king-item-110",
    "title": "Bespoke Waist & Inseam Tailoring #110",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_s3yzzfs3yzzfs3yz.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #110 - King's Alterations Austin TX",
    "featured": false,
    "order": 110
  },
  {
    "id": "king-item-111",
    "title": "Bridal Lace & Train Reconstruction #111",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_sbq239sbq239sbq2.jpg",
    "alt": "Bridal Lace & Train Reconstruction #111 - King's Alterations Austin TX",
    "featured": false,
    "order": 111
  },
  {
    "id": "king-item-112",
    "title": "Executive Blazer Sleeve Adjustment #112",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_sfqpgusfqpgusfqp.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #112 - King's Alterations Austin TX",
    "featured": false,
    "order": 112
  },
  {
    "id": "king-item-113",
    "title": "Delicate Silk Dress Resizing #113",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_sgoeeasgoeeasgoe.jpg",
    "alt": "Delicate Silk Dress Resizing #113 - King's Alterations Austin TX",
    "featured": false,
    "order": 113
  },
  {
    "id": "king-item-114",
    "title": "Creative Costume & Cosplay Detailing #114",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_spgldmspgldmspgl.jpg",
    "alt": "Creative Costume & Cosplay Detailing #114 - King's Alterations Austin TX",
    "featured": false,
    "order": 114
  },
  {
    "id": "king-item-115",
    "title": "Leather Garment & Hardware Restoration #115",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_t0vxxqt0vxxqt0vx.jpg",
    "alt": "Leather Garment & Hardware Restoration #115 - King's Alterations Austin TX",
    "featured": false,
    "order": 115
  },
  {
    "id": "king-item-116",
    "title": "Custom Canvas Bag Reinforcement #116",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_t8g7jqt8g7jqt8g7.jpg",
    "alt": "Custom Canvas Bag Reinforcement #116 - King's Alterations Austin TX",
    "featured": false,
    "order": 116
  },
  {
    "id": "king-item-117",
    "title": "Prom Dress Bodice & Strap Fitting #117",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_t9cglet9cglet9cg.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #117 - King's Alterations Austin TX",
    "featured": false,
    "order": 117
  },
  {
    "id": "king-item-118",
    "title": "Classic Tuxedo Refinement #118",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_tk17j3tk17j3tk17.jpg",
    "alt": "Classic Tuxedo Refinement #118 - King's Alterations Austin TX",
    "featured": false,
    "order": 118
  },
  {
    "id": "king-item-119",
    "title": "Heavy Duty Denim Repair & Taper #119",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_tkzzbntkzzbntkzz.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #119 - King's Alterations Austin TX",
    "featured": false,
    "order": 119
  },
  {
    "id": "king-item-120",
    "title": "Specialty Fabric & Activewear Seaming #120",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_tymxrltymxrltymx.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #120 - King's Alterations Austin TX",
    "featured": false,
    "order": 120
  },
  {
    "id": "king-item-121",
    "title": "Precision Hemming & Silhouette Adjustment #121",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_tyt6zptyt6zptyt6.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #121 - King's Alterations Austin TX",
    "featured": false,
    "order": 121
  },
  {
    "id": "king-item-122",
    "title": "Tailored Wedding Gown Fitting #122",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_u2w0ggu2w0ggu2w0.jpg",
    "alt": "Tailored Wedding Gown Fitting #122 - King's Alterations Austin TX",
    "featured": false,
    "order": 122
  },
  {
    "id": "king-item-123",
    "title": "Custom Suit Jacket Tapering #123",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_udkjwvudkjwvudkj.jpg",
    "alt": "Custom Suit Jacket Tapering #123 - King's Alterations Austin TX",
    "featured": false,
    "order": 123
  },
  {
    "id": "king-item-124",
    "title": "Formal Evening Gown Alteration #124",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_uecgbkuecgbkuecg.jpg",
    "alt": "Formal Evening Gown Alteration #124 - King's Alterations Austin TX",
    "featured": false,
    "order": 124
  },
  {
    "id": "king-item-125",
    "title": "Bespoke Waist & Inseam Tailoring #125",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_unr1vhunr1vhunr1.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #125 - King's Alterations Austin TX",
    "featured": false,
    "order": 125
  },
  {
    "id": "king-item-126",
    "title": "Bridal Lace & Train Reconstruction #126",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_uqy5zeuqy5zeuqy5.jpg",
    "alt": "Bridal Lace & Train Reconstruction #126 - King's Alterations Austin TX",
    "featured": false,
    "order": 126
  },
  {
    "id": "king-item-127",
    "title": "Executive Blazer Sleeve Adjustment #127",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_vspjxwvspjxwvspj.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #127 - King's Alterations Austin TX",
    "featured": false,
    "order": 127
  },
  {
    "id": "king-item-128",
    "title": "Delicate Silk Dress Resizing #128",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_vtjudbvtjudbvtju.jpg",
    "alt": "Delicate Silk Dress Resizing #128 - King's Alterations Austin TX",
    "featured": false,
    "order": 128
  },
  {
    "id": "king-item-129",
    "title": "Creative Costume & Cosplay Detailing #129",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_wa9i5swa9i5swa9i.jpg",
    "alt": "Creative Costume & Cosplay Detailing #129 - King's Alterations Austin TX",
    "featured": false,
    "order": 129
  },
  {
    "id": "king-item-130",
    "title": "Leather Garment & Hardware Restoration #130",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_whmdtnwhmdtnwhmd.jpg",
    "alt": "Leather Garment & Hardware Restoration #130 - King's Alterations Austin TX",
    "featured": false,
    "order": 130
  },
  {
    "id": "king-item-131",
    "title": "Custom Canvas Bag Reinforcement #131",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_wino71wino71wino.jpg",
    "alt": "Custom Canvas Bag Reinforcement #131 - King's Alterations Austin TX",
    "featured": false,
    "order": 131
  },
  {
    "id": "king-item-132",
    "title": "Prom Dress Bodice & Strap Fitting #132",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_wl6qw9wl6qw9wl6q.jpg",
    "alt": "Prom Dress Bodice & Strap Fitting #132 - King's Alterations Austin TX",
    "featured": false,
    "order": 132
  },
  {
    "id": "king-item-133",
    "title": "Classic Tuxedo Refinement #133",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_wnths3wnths3wnth.jpg",
    "alt": "Classic Tuxedo Refinement #133 - King's Alterations Austin TX",
    "featured": false,
    "order": 133
  },
  {
    "id": "king-item-134",
    "title": "Heavy Duty Denim Repair & Taper #134",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_x7n5whx7n5whx7n5.jpg",
    "alt": "Heavy Duty Denim Repair & Taper #134 - King's Alterations Austin TX",
    "featured": false,
    "order": 134
  },
  {
    "id": "king-item-135",
    "title": "Specialty Fabric & Activewear Seaming #135",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_xcipz7xcipz7xcip.jpg",
    "alt": "Specialty Fabric & Activewear Seaming #135 - King's Alterations Austin TX",
    "featured": false,
    "order": 135
  },
  {
    "id": "king-item-136",
    "title": "Precision Hemming & Silhouette Adjustment #136",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_xcrf5uxcrf5uxcrf.jpg",
    "alt": "Precision Hemming & Silhouette Adjustment #136 - King's Alterations Austin TX",
    "featured": false,
    "order": 136
  },
  {
    "id": "king-item-137",
    "title": "Tailored Wedding Gown Fitting #137",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_xd7eulxd7eulxd7e.jpg",
    "alt": "Tailored Wedding Gown Fitting #137 - King's Alterations Austin TX",
    "featured": false,
    "order": 137
  },
  {
    "id": "king-item-138",
    "title": "Custom Suit Jacket Tapering #138",
    "category": "leather-accessories",
    "categoryName": "Leather & Accessories",
    "image": "/catalog/Gemini_Generated_Image_xm2ue1xm2ue1xm2u.jpg",
    "alt": "Custom Suit Jacket Tapering #138 - King's Alterations Austin TX",
    "featured": false,
    "order": 138
  },
  {
    "id": "king-item-139",
    "title": "Formal Evening Gown Alteration #139",
    "category": "bridal-formal",
    "categoryName": "Bridal & Formalwear",
    "image": "/catalog/Gemini_Generated_Image_y9et3ty9et3ty9et.jpg",
    "alt": "Formal Evening Gown Alteration #139 - King's Alterations Austin TX",
    "featured": false,
    "order": 139
  },
  {
    "id": "king-item-140",
    "title": "Bespoke Waist & Inseam Tailoring #140",
    "category": "suits-tailoring",
    "categoryName": "Suits & Tailoring",
    "image": "/catalog/Gemini_Generated_Image_yig3w6yig3w6yig3.jpg",
    "alt": "Bespoke Waist & Inseam Tailoring #140 - King's Alterations Austin TX",
    "featured": false,
    "order": 140
  },
  {
    "id": "king-item-141",
    "title": "Bridal Lace & Train Reconstruction #141",
    "category": "everyday-alterations",
    "categoryName": "Everyday Alterations",
    "image": "/catalog/Gemini_Generated_Image_yivhv5yivhv5yivh.jpg",
    "alt": "Bridal Lace & Train Reconstruction #141 - King's Alterations Austin TX",
    "featured": false,
    "order": 141
  },
  {
    "id": "king-item-142",
    "title": "Executive Blazer Sleeve Adjustment #142",
    "category": "creative-custom",
    "categoryName": "Creative & Custom Projects",
    "image": "/catalog/Gemini_Generated_Image_yq2rr8yq2rr8yq2r.jpg",
    "alt": "Executive Blazer Sleeve Adjustment #142 - King's Alterations Austin TX",
    "featured": false,
    "order": 142
  },
  {
    "id": "king-item-143",
    "title": "Delicate Silk Dress Resizing #143",
    "category": "uniforms-workwear",
    "categoryName": "Uniforms & Workwear",
    "image": "/catalog/Gemini_Generated_Image_ytl7j0ytl7j0ytl7.jpg",
    "alt": "Delicate Silk Dress Resizing #143 - King's Alterations Austin TX",
    "featured": false,
    "order": 143
  }
];
