const placesData= [
    {
      id: 1,
      place_name: "Matacong Zipline",
      place_description: "Dubbed as the longest Zipline in Bicol with 755m long cables",
      activity: "Viewing, Zipline ride, bird watching",
      location: "Brgy. Matacong",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fzip-line5.jpg?alt=media&token=7e5865f7-2b93-41c2-9b81-6045ad46ad2b",
      classification: "Adventure/Manmade",
      remarks: "Two-way ride for 250 pesos"      
    },
    {
        id: 2,
        place_name: "Mampurog River",
        place_description: "Bicol Region's multi-awarded and 2005 national finalist for the cleanest in-land bodies of water. Popularly known as the bathing escapade and summer destination of the province of Camarines Norte.",
        activity: "Swimming",
        location: "Brgy. Mampurog",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fmampurog.jpg?alt=media&token=e51e5e98-8d67-4abb-ae84-f9f1504107cb",
        classification: "Nature-based",
        remarks: "Nippa cottages available"        
      },
      {
          id: 3,
        place_name: "Highlands and Environmental Park",
        place_description: "It always fascinates every visitor with its breathtaking and panoramic view of municipalities of Vinzons, Talisay, Daet, Basud and Mercedes. From this Vantage point, one can see as far as Bagasbas Beach and San Miguel Bay.",
        activity: "Viewing, camping, bird watching",
        location: "Ressetlement, Brgy. Matacong to Brgy. San Isidro",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fhighlands.jpg?alt=media&token=b58e223f-ebc0-4b19-bcdb-8f46faf263e7",
        classification: "Nature-based",
        remarks: "Ideal during the months of January-February for a \"baguio-like\" weather experience."        
      },
      {
          id: 4,
        place_name: "Dagotdotan Spring Resort",
        place_description: "Privately owned. One of the most visited resorts in San Lorenzo Ruiz",
        activity: "Swimming",
        location: "Brgy. Dagotdotan",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fdagotdotan-spring-resort.jpg?alt=media&token=61872bcb-3dba-415b-b6de-2162cd68a240",
        classification: "Nature-based",
        remarks: "Entrance Fee-2Php, Cottage Fees ranging from 350-1,200Php depending on the size"        
      },
      {
          id: 5,
        place_name: "Athena's Nature Park and Resort",
        place_description: "Privately owned. Newly opened With DOT Mabuhay Accreditation",
        activity: "Swimming",
        location: "Brgy. Dagotdotan",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fathena.jpg?alt=media&token=8ae3a6e8-f261-41ee-9ab0-d81ddc77f880",
        classification: "Nature-based",
        remarks: "Cottage fees range from 500-600php"        
      },
      {
          id: 6,
        place_name: "Club Noah Eco-Resort",
        place_description: "Privately owned. An instagram worthy place. They have open  cabanas where visitors can relax and enjoy the beauty and serenity of nature.With DOT Mabuhay Accreditation",
        activity: "Swimming",
        location: "Brgy. Mampurog",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fclubnoah.jpg?alt=media&token=d7d5fb0d-0d4e-49ca-a254-a1c7aa296fca",
        classification: "Nature-based",
        remarks: "Two-way ride for 250 pesos"        
      },
      {
          id: 7,
        place_name: "Nacali Falls",
        place_description: "DLocated in the mountainous area of the municipality. It reveals the wonders of nature through its voluminous crystal-clear watercourse from springs of inner forest of the Bicol peninsula. It is best for nature lovers, hiking and trekking enthusiasts.",
        activity: "Swimming, Hiking, Trekking",
        location: "Brgy. Maisog",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fnacali-falls.jpg?alt=media&token=dd6fb09f-ff20-4b28-bd23-07941d54b6e6",
        classification: "Nature-based",
        remarks: "To reach the falls, one has to ride the 379meter tramline. Tramline fee-50php back and forth"        
      },
      {
          id: 8,
        place_name: "Hanging Bridges",
        place_description: "Visitors feel a different kind of thrill crossing the hanging bridge while enjoying the view of the river.",
        activity: "Viewing",
        location: "Brgy. Mampurog",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fhanging-bridges.jpg?alt=media&token=b9b375ed-9d1f-4d6e-9c2d-838f28027b36",
        classification: "Adventure/Manmade",
        remarks: ""        
      },
      {
          id: 9,
        place_name: "San Lorenzo Ruiz Parish Church",
        place_description: "Built in honor of the first Filipino Saint Lorenzo Ruiz",
        activity: "Pilgrimage",
        location: "Brgy. Matacong",
        image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fchurch.jpg?alt=media&token=5dd7db01-53e5-4c0f-b6f0-f37ab124d565",
        classification: "Pilgrimage tourism",
        remarks: ""        
      },
      
      {
        id:   10,
      place_name: "Rafflesia Viewing Site",
      place_description: "Rafflesia is the world's largest flower. Several types of rafflesia varieties can be found in the lower sloped of Mt. Guinatungan. During June or July, there is a week or two when the rafflesias are in bloom, making them a seasonal but very rewarding destination for hikers who have an interest in our unique tropical flora and fauna.",
      activity: "viewing, trekking, hiking, camping",
      location: "Mt. Guinatungan",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Frafflesia.jpg?alt=media&token=dc20dcae-9392-41cb-8e37-7194c4b87a60",
      classification: "Nature-based, Educational",
      remarks: "Rafflesia blooms during the months of June-July."
    },
    {
        id: 11,
      place_name: "Pineapple Plantation",
      place_description: "San Lorenzo Ruiz is dubbed as the home of the sweetest pineapple which is the Queen Formosa.",
      activity: "viewing, pineapple picking, peeling and eating",
      location: "Different Barangays of the Municipality",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fpineapple.jpeg?alt=media&token=3ef80eaf-a61e-4fe8-8e8d-24486e3770a0",
      classification: "Nature-based",
      remarks: ""        
    },
    {
      id: 12,
      place_name: "Ibatan Falls",
      place_description: "Located in the mountainous area of the municipality. It reveals the wonders of nature through its voluminous crystal-clear watercourse from springs of inner forest of the Bicol peninsula. It is best for nature lovers, hiking and trekking enthusiasts.",
      activity: "Trekking, camping, viewing, hiking, swimming",
      location: "Brgy. San Isidro",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fibatan-falls.jpeg?alt=media&token=b56962d4-567e-4ffc-8305-11b261bf1105",
      classification: "Nature-based",
      remarks: ""        
    },
    {
      id: 13,
      place_name: "Angelina Falls",
      place_description: "A worthy sidetrip if visitors are hiking/trekking to Mt. Labo. This majestic waterfall was named after the local tourist guide named Angeles \"Tiyong Ani\" Malate.",
      activity: "Trekking, camping, viewing, hiking, swimming",
      location: "Brgy. San Isidro",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fangelina-falls.jpg?alt=media&token=04427382-5a2e-46c0-b8c3-436cc3a9a0db",
      classification: "Nature-based",
      remarks: "Days required / Hours to summit: 2-3 days / 8-10 hours"        
    },
    {
      id: 14,
      place_name: "Nabangko Falls",
      place_description: "Located in the mountainous area of the municipality. It reveals the wonders of nature through its voluminous crystal-clear watercourse from springs of inner forest of the Bicol peninsula. It is best for nature lovers, hiking and trekking enthusiasts.",
      activity: "Trekking, camping, viewing, hiking",
      location: "Brgy. San Isidro",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fnabangko-falls.png?alt=media&token=8e9fb420-c812-4b0a-8859-71c2bdd2eba7",
      classification: "Nature-based",
      remarks: "Days required / Hours to summit: 2-3 days / 8-10 hours"        
    },
    {
        id: 15,
      place_name: "Mt. Labo",
      place_description: "Perfect for hiking and trekking enthusiasts. Mount Labo, is a potentially active strato volcano in the province of Camarines Norte. Rising to an impressive height of 1544 meters above sea level, Mt. Labo in Camarines Norte is a haven of biodiversity whose roster of species include the rafflesia (Rafflesia manillana) as well as the rufous hornbill (Buceros hydrocorax). Hikers, for their part, can take delight in the challenging trails of the mountain system (it is too big to be called just a single mountain). Straddling three different municipalities, the possibilities for traverse trails are many.(http://www.pinoymountaineer.com/2013/09/mt-labo-camarines-norte-1544.html)",
      activity: "Trekking, camping, viewing, hiking",
      location: "Brgy. San Isidro",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fmt-labo.JPG?alt=media&token=0e665a52-aeb7-4ba1-87d3-7a3f85b2296e",
      classification: "Nature-based",
      remarks: ""        
    },
    {
        id: 16,
      place_name: "Mampili River",
      place_description: "Located in Brgy. San Isidro.The river boasts of crystal clear water and magnificent rock formations.",
      activity: "Trekking, Swimming",
      location: "Brgy. San Isidro",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fmampili-river.jpg?alt=media&token=9e20064e-2a0f-4c86-bc0f-7bb5a756546a",
      classification: "Nature-based",
      remarks: "1 hr trek from barangay proper"        
    },
    {
        id: 17,
      place_name: "Spillway Tuo River",
      place_description: "Located just adjacent to Mampili river. ",
      activity: "Trekking",
      location: "Brgy. San Isidro",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fspillway.jpg?alt=media&token=861994d4-9d52-404f-9c5c-dfef4dc26d09",
      classification: "Nature-based",
      remarks: "30mins trek from Mampili river"        
    },
    {
        id: 18,
      place_name: "Natura Verde Farm and Private Resort",
      place_description: "A vacation home rental located in Brgy. Dagotdotan, surrounded with lush greeneries where tropical birds abound. With DOT mabuhay accreditation.",
      activity: "Swimming",
      location: "Brgy. Dagotgotan",
      image: "https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/photos%2FTourism%2Fplaces%2Fnatura.jpg?alt=media&token=1f2b23a8-5fc3-4c06-80e0-2466107cd4c4",
      classification: "Pilgrimage tourism",
      remarks: "Pre-booking is required"        
    },
  
    
  ];
  
  export default placesData;