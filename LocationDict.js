var dict = [
  { place: "Coney Island (CD13)	", address: [40.5755438, -73.9707016] },
  { place: "Bronx", address: [40.8447819, -73.8648268] },
  {
    place: "Morris Park and Bronxdale (CD11)",
    address: [40.846654, -73.8594241],
  },
  {
    place: "Williamsbridge and Baychester (CD12)",
    address: [40.8787602, -73.8528356],
  },
  { place: "Brooklyn", address: [40.6781784, -73.9441579] },
  {
    place: "Greenpoint and Williamsburg (CD1)",
    address: [40.7304701, -73.9515032],
  },
  {
    place: "Fort Greene and Brooklyn Heights (CD2)",
    address: [40.6920638, -73.9741874],
  },
  { place: "Bedford Stuyvesant (CD3)", address: [40.6872176, -73.9417735] },
  { place: "Bushwick (CD4)", address: [40.6957755, -73.9170604] },
  {
    place: "East New York and Starrett City (CD5)",
    address: [40.6501402, -73.8837345],
  },
  {
    place: "Park Slope and Carroll Gardens (CD6)",
    address: [40.6710672, -73.9814228],
  },
  { place: "Sunset Park (CD7)", address: [40.65272, -74.0093348] },
  {
    place: "Crown Heights and Prospect Heights (CD8)",
    address: [40.6694022, -73.9422324],
  },
  {
    place: "Belmont and East Tremont (CD6)",
    address: [40.8458359, -73.8919962],
  },
  {
    place: "Kingsbridge Heights and Bedford (CD7)",
    address: [40.8711235, -73.8976328],
  },
  { place: "Kingsbridge - Riverdale", address: [40.8876785, -73.9133783] },
  { place: "Northeast Bronx", address: [40.8447819, -73.8648268] },
  { place: "Fordham - Bronx Pk", address: [40.8592667, -73.8984694] },
  { place: "Pelham - Throgs Neck", address: [40.818399, -73.8213213] },
  { place: "Crotona -Tremont", address: [40.8416443, -73.8859307] },
  { place: "High Bridge - Morrisania", address: [40.8310814, -73.9058574] },
  { place: "Hunts Point - Mott Haven", address: [40.8094385, -73.8803315] },
  { place: "Greenpoint", address: [40.7304701, -73.9515032] },
  { place: "Downtown - Heights - Slope", address: [33.4969375, 73.0676875] },
  {
    place: "Bedford Stuyvesant - Crown Heights",
    address: [40.6694022, -73.9422324],
  },
  { place: "East New York", address: [40.6590529, -73.8759245] },
  { place: "Sunset Park", address: [40.65272, -74.0093348] },
  { place: "Borough Park", address: [40.6350319, -73.9921028] },
  { place: "East Flatbush - Flatbush", address: [40.6342338, -73.9491561] },
  { place: "Canarsie - Flatlands", address: [40.6402325, -73.9060579] },
  { place: "Bensonhurst - Bay Ridge", address: [40.6158056, -73.9999512] },
  {
    place: "Coney Island - Sheepshead Bay",
    address: [40.5755438, -73.9707016],
  },
  { place: "Williamsburg - Bushwick", address: [40.7081156, -73.9570696] },
  { place: "Washington Heights", address: [40.8417082, -73.9393554] },
  {
    place: "Central Harlem - Morningside Heights",
    address: [40.8089419, -73.9482305],
  },
  { place: "East Harlem", address: [40.7957399, -73.9389213] },
  { place: "Upper West Side", address: [40.7870106, -73.9753676] },
  { place: "Upper East Side", address: [40.7735649, -73.9565551] },
  { place: "Gramercy Park - Murray Hill", address: [40.7367783, -73.9844722] },
  { place: "Greenwich Village - SoHo", address: [40.7335719, -74.0027418] },
  {
    place: "Union Square - Lower East Side",
    address: [40.715033, -73.9842724],
  },
  { place: "Lower Manhattan", address: [40.7208595, -74.0006686] },
  { place: "Long Island City - Astoria", address: [40.744679, -73.9485424] },
  { place: "West Queens", address: [40.7282239, -73.7948516] },
  { place: "Flushing - Clearview", address: [40.7674987, -73.833079] },
  { place: "Bayside - Little Neck", address: [40.7640151, -73.7433727] },
  { place: "Ridgewood - Forest Hills", address: [36.0736076, -86.8550296] },
  { place: "Fresh Meadows", address: [40.7335179, -73.7801447] },
  {
    place: "Riverdale and Fieldston (CD8)",
    address: [40.8980519, -73.9014047],
  },
  { place: "Southwest Queens", address: [40.7282239, -73.7948516] },
  { place: "Jamaica", address: [18.109581, -77.297508] },
  { place: "Southeast Queens", address: [41.3917065, -73.6300729] },
  { place: "Rockaways", address: [40.5831668, -73.8153597] },
  { place: "Port Richmond", address: [39.9885174, -75.1063473] },
  { place: "Stapleton - St. George", address: [40.6270217, -74.0783309] },
  { place: "Willowbrook", address: [41.7697533, -87.9358931] },
  { place: "South Beach - Tottenville", address: [40.5083408, -74.2355404] },
  { place: "New York City", address: [40.7127753, -74.0059728] },
  { place: "Manhattan", address: [40.7830603, -73.9712488] },
  { place: "Queens", address: [40.7282239, -73.7948516] },
  { place: "Staten Island", address: [40.5795317, -74.1502007] },
  {
    place: "Parkchester and Soundview (CD9)",
    address: [40.8382522, -73.8566087],
  },
  { place: "Bensonhurst (CD11)", address: [40.6139307, -73.9921833] },
  {
    place: "Throgs Neck and Co-op City (CD10)",
    address: [40.818399, -73.8213213],
  },
  { place: "Financial District (CD1)", address: [40.7077143, -74.0082787] },
  {
    place: "Greenwich Village and Soho (CD2)",
    address: [40.7335719, -74.0027418],
  },
  {
    place: "Lower East Side and Chinatown (CD3)",
    address: [40.715033, -73.9842724],
  },
  {
    place: "Stuyvesant Town and Turtle Bay (CD6)",
    address: [40.7316903, -73.9778494],
  },
  { place: "Upper West Side (CD7)", address: [40.7870106, -73.9753676] },
  { place: "Upper East Side (CD8)", address: [40.7735649, -73.9565551] },
  {
    place: "Morningside Heights and Hamilton Heights (CD9)",
    address: [40.8105443, -73.9620581],
  },
  { place: "Central Harlem (CD10)", address: [40.8089419, -73.9482305] },
  { place: "East Harlem (CD11)", address: [40.7957399, -73.9389213] },
  {
    place: "Washington Heights and Inwood (CD12)",
    address: [40.8417082, -73.9393554],
  },
  { place: "Mott Haven and Melrose (CD1)", address: [40.8091068, -73.9228881] },
  {
    place: "Hunts Point and Longwood (CD2)",
    address: [40.8094385, -73.8803315],
  },
  { place: "Morrisania and Crotona (CD3)", address: [40.8310814, -73.9058574] },
  {
    place: "Highbridge and Concourse (CD4)",
    address: [40.836916, -73.9271294],
  },
  {
    place: "Fordham and University Heights (CD5)",
    address: [40.8624843, -73.9141891],
  },
  {
    place: "South Crown Heights and Lefferts Gardens (CD9)",
    address: [40.6592355, -73.9533895],
  },
  {
    place: "Bay Ridge and Dyker Heights (CD10)",
    address: [40.620305, -74.007438],
  },
  { place: "Borough Park (CD12)", address: [40.6350319, -73.9921028] },
  { place: "Flatbush and Midwood (CD14)	", address: [40.6595023, -73.9605783] },
  { place: "Sheepshead Bay (CD15)", address: [40.5953955, -73.9457538] },
  { place: "Brownsville (CD16)", address: [25.9017472, -97.4974838] },
  { place: "East Flatbush (CD17)", address: [40.6481656, -73.9299899] },
  {
    place: "Flatlands and Canarsie (CD18)",
    address: [40.6402325, -73.9060579],
  },
  {
    place: "Long Island City and Astoria (CD1)",
    address: [40.744679, -73.9485424],
  },
  { place: "Woodside and Sunnyside (CD2)", address: [38.714394, -77.7824978] },
  { place: "Jackson Heights (CD3)", address: [40.7556818, -73.8830701] },
  { place: "Ridgewood and Maspeth (CD5)", address: [40.7294018, -73.9065883] },
  {
    place: "Rego Park and Forest Hills (CD6)",
    address: [40.7255722, -73.8624893],
  },
  {
    place: "Hillcrest and Fresh Meadows (CD8)",
    address: [40.7335179, -73.7801447],
  },
  {
    place: "Kew Gardens and Woodhaven (CD9)",
    address: [51.477851, -0.2907179],
  },
  {
    place: "South Ozone Park and Howard Beach (CD10)",
    address: [40.6764003, -73.8124984],
  },
  {
    place: "Bayside and Little Neck (CD11)",
    address: [40.7640151, -73.7433727],
  },
  { place: "Jamaica and Hollis (CD12)", address: [18.109581, -77.297508] },
  { place: "Queens Village (CD13)", address: [40.7156628, -73.7419017] },
  {
    place: "Rockaway and Broad Channel (CD14)",
    address: [40.6079998, -73.8158045],
  },
  {
    place: "St. George and Stapleton (CD1)",
    address: [37.0965278, -113.5684164],
  },
  {
    place: "South Beach and Willowbrook (CD2)",
    address: [25.7826123, -80.1340772],
  },
  {
    place: "Tottenville and Great Kills (CD3)",
    address: [40.5083408, -74.2355404],
  },
  { place: "Upper East Side-Gramercy", address: [40.7735649, -73.9565551] },
  { place: "Chelsea-Village	", address: [35.1291161, -106.564816] },
  { place: "Union Square-Lower Manhattan", address: [40.7345702, -73.991862] },
  {
    place: "Bayside Little Neck-Fresh Meadows",
    address: [40.7335179, -73.7801447],
  },
  { place: "Northern SI", address: [43.7844397, -88.7878678] },
  { place: "South Bronx", address: [40.81767, -73.9184261] },
];

function search_obj(value) {
  for (obj of dict) {
    if (obj.place === value) {
      return obj.address;
    }
  }
}

// function search_obj(value) {
//   for (let i = 0; i < dict.length(); i++) {
//     if (dict[i].place === value) {
//       return dict[i].address;
//     }
//   }
// }

console.log(search_obj("Bronx"));
