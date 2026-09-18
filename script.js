const masterplanPinsData = {
  zone_e: {
    number: "1",
    zone: "Zone E &bull; Integration & High-Bays",
    title: "Satellite Assembly & Composite High-Bays",
    desc: "State-of-the-art ISO Class 5 and Class 7 cleanrooms designed for multi-satellite payload assembly, composite filament winding, and high-precision metrology alignment.",
    specs: [
      { label: "Cleanroom Standard", val: "ISO 14644-1 Class 5 & Class 7" },
      { label: "High-Bay Overhead Clearance", val: "16 meters vertical crane clearance" },
      { label: "Key Infrastructure", val: "Composite fabrication shop, CMM inspection, 3D optical laser tracker" },
      { label: "Target Users", val: "Dhruva Space & Pixxel Space satellite assembly" }
    ]
  },
  admin_gate: {
    number: "2",
    zone: "Main Gateway &bull; NH-16 Access",
    title: "Main Gateway, Security & Admin Complex",
    desc: "Primary entry complex connected directly to National Highway 16 (Tirupati-Nellore Corridor) featuring single-window APIIC industrial taskforce offices and 24/7 biometrically secured access.",
    specs: [
      { label: "Highway Interface", val: "Direct cloverleaf access to NH-16 & SH-71" },
      { label: "Administrative Hub", val: "APIIC single-window statutory clearance office" },
      { label: "Security Classification", val: "Category-A defense & space security perimeter" },
      { label: "Logistics Hub", val: "Customs bonding yard & heavy cargo weighbridge" }
    ]
  },
  zone_b: {
    number: "3",
    zone: "Zone B &bull; Testing & Environment",
    title: "Environmental Testing & TVAC Chambers",
    desc: "Comprehensive satellite environmental testing facility equipped with thermal vacuum (TVAC) chambers, electrodynamic vibration shakers, and acoustic test chambers.",
    specs: [
      { label: "Thermal Vacuum (TVAC)", val: "500 kg capacity (-180°C to +150°C)" },
      { label: "Vibration Test Stand", val: "100 kN electrodynamic shaker table" },
      { label: "Acoustic Facility", val: "145 dB overall sound pressure acoustic chamber" },
      { label: "Shared CoE Access", val: "60% state tariff subsidy for empaneled AP MSMEs" }
    ]
  },
  propellant_farm: {
    number: "4",
    zone: "Gas & Fuel Farm &bull; Cryogenics",
    title: "Air Separation Unit & Bulk Propellant Tank Farm",
    desc: "Centralized gas separation and propellant storage facility delivering high-purity Liquid Oxygen (LOX), Liquid Nitrogen (LN2), and Liquid Methane via automated cryo piping.",
    specs: [
      { label: "Gas Separation", val: "On-site 50 Ton/day Air Separation Unit (ASU)" },
      { label: "Bulk Cryo Tanks", val: "200,000 Liter LOX, LN2 & Liquid Methane storage" },
      { label: "Automation", val: "SCADA real-time pressure & leak telemetry center" },
      { label: "Cryo Delivery", val: "Direct vacuum-jacketed transfer pipeline to Zone D" }
    ]
  },
  green_corridor: {
    number: "5",
    zone: "Logistics &bull; SHAR Corridor",
    title: "Dedicated Green Transit Route to SDSC SHAR",
    desc: "Dedicated zero-delay heavy transport corridor connecting the AP Space Park directly to ISRO's Satish Dhawan Space Centre launch pads in under 35 km.",
    specs: [
      { label: "Distance to Launchpad", val: "32.4 km (&lt; 40 mins transit time)" },
      { label: "Corridor Type", val: "Dedicated green-wave signal clearance highway" },
      { label: "Pavement Rating", val: "Reinforced for 120-Ton multi-axle rocket stage trailers" },
      { label: "Risk Reduction", val: "70% reduction in interstate transport vibration risks" }
    ]
  },
  zone_d: {
    number: "6",
    zone: "Zone D &bull; Hazardous Test Stand",
    title: "Vertical & Horizontal Static Engine Test Stand",
    desc: "Heavy static engine fire test facility designed for high-thrust liquid, cryogenic, and solid rocket motors with reinforced blast bunkers and high-capacity water deluge.",
    specs: [
      { label: "Thrust Capability", val: "Up to 100-Ton vertical & horizontal engine static fire" },
      { label: "Blast Protection", val: "Reinforced concrete observation bunkers with blast glass" },
      { label: "Acoustic Suppression", val: "50,000 Liters/min acoustic water deluge system" },
      { label: "Flame Trench", val: "Refractory-lined flame deflector trench" }
    ]
  },
  zld_plant: {
    number: "7",
    zone: "Eco Treatment &bull; Sustainability",
    title: "Zero Liquid Discharge (ZLD) Treatment Plant",
    desc: "Environmentally sustainable industrial water treatment and recycling plant that recovers 98% of water used during static engine fire deluge testing.",
    specs: [
      { label: "Treatment Capacity", val: "2,000 Cubic Meters / day recycling" },
      { label: "Environmental Standard", val: "Zero Liquid Discharge (ZLD) APPCB compliant" },
      { label: "Recycling Use", val: "Closed-loop supply for Zone D acoustic water deluge" }
    ]
  }
};

const apSuppliersData = [
  // ==================== SKYROOT AEROSPACE SUPPLIERS (8 UNITS) ====================
  {
    id: "sigma",
    companyId: "skyroot",
    name: "Sigma Advanced Systems (AP Unit)",
    cluster: "Sri City",
    location: "Sri City Industrial Zone, Tirupati District",
    capability: "Machining",
    capabilityTitle: "Precision Aerospace CNC Machining",
    certifications: ["AS9100D", "ISO 9001:2015"],
    primes: ["Skyroot Aerospace", "Agnikul Cosmos"],
    description: "Fabricates high-strength aerospace aluminum & titanium rocket structural mounts, grid fins, and inter-stage payload adapter rings.",
    suppliedComponents: ["Titanium Engine Mounts", "Interstage Adapter Rings", "Gimbal Actuator Housings"],
    facilities: "12x 5-Axis Mazak CNC Mills, CMM Inspection Lab, High-Temp Titanium Heat Treatment Furnace.",
    contact: "ap-aerospace@sigma-sys.com | Sri City, AP"
  },
  {
    id: "vem",
    companyId: "skyroot",
    name: "VEM Aerospace Composites AP",
    cluster: "Sri City",
    location: "Sri City Aerospace Corridor, Chittoor Cluster",
    capability: "Composites",
    capabilityTitle: "Rocket Casing & CFRP Stage Structures",
    certifications: ["ISRO Qualified", "AS9100D"],
    primes: ["Skyroot Aerospace"],
    description: "Produces filament-wound solid rocket motor casings, carbon-fiber composite fairings, and thermal protection insulation skirts for Vikram stages.",
    suppliedComponents: ["Filament-Wound Casings", "CFRP Payload Fairings", "Stage Separation Skirts"],
    facilities: "Dual-Spindle Filament Winding Autoclave (4m diameter x 12m length), Ultrasonic Composite Testing.",
    contact: "composites.ap@vem.in | Sri City, AP"
  },
  {
    id: "kalyani",
    companyId: "skyroot",
    name: "Kalyani Strategic AP Energetics",
    cluster: "Kurnool",
    location: "Orvakal Industrial Hub, Kurnool District",
    capability: "Energetics",
    capabilityTitle: "High-Altitude Propellant & Cryo Components",
    certifications: ["ISO 9001:2015", "PESO Approved"],
    primes: ["Skyroot Aerospace", "Agnikul Cosmos"],
    description: "Manufactures high-pressure propellant tank structural rings, pyrotechnic stage separation bolts, and titanium cryogenic piping manifolds.",
    suppliedComponents: ["Pyrotechnic Fasteners", "Cryo Manifolds", "COPV Pressure Tanks"],
    facilities: "High-Pressure Hydraulic Hydro-Test Rig (1000 Bar), Cryogenic Liquid Nitrogen Flow Test Stand.",
    contact: "defense-ap@kalyanistrategic.com | Kurnool, AP"
  },
  {
    id: "godavari",
    companyId: "skyroot",
    name: "Godavari Heavy Space Structures",
    cluster: "Vijayawada",
    location: "Jaggaiahpet Industrial Park, NTR District",
    capability: "Machining",
    capabilityTitle: "Launch Transport & Integration Rigs",
    certifications: ["Heavy Engineering Certified", "ISO 9001"],
    primes: ["Skyroot Aerospace", "Agnikul Cosmos"],
    description: "Builds mobile rocket transport trailers, rocket stage integration tilting tables, and umbilical tower interface arms for Sriharikota logistics.",
    suppliedComponents: ["Mobile Transport Trailers", "Integration Rigs", "Flame Deflectors"],
    facilities: "100-Ton Overhead Crane Bay, Submerged Arc Welding (SAW), Heavy Structural Alignment Laser Tracker.",
    contact: "space.logistics@godavariheavy.in | NTR Dist, AP"
  },
  {
    id: "andhra_forgings",
    companyId: "skyroot",
    name: "Andhra Precision Forgings",
    cluster: "Vijayawada",
    location: "Autonagar Industrial Estate, Vijayawada",
    capability: "Machining",
    capabilityTitle: "High-Strength Alloy Flange & Thrust Ring Forgings",
    certifications: ["ISO 9001:2015", "AS9100D Empaneled"],
    primes: ["Skyroot Aerospace"],
    description: "Forges seamless aluminum-lithium alloy flange rings, titanium thrust domes, and high-pressure motor casing attachment rings.",
    suppliedComponents: ["Al-Li Flange Rings", "Titanium Thrust Domes", "Casing Joint Forgings"],
    facilities: "5000-Ton Radial-Axial Ring Rolling Mill, Induction Heating Furnaces, Die Machining Facility.",
    contact: "sales@andhraforgings.ap.gov.in | Vijayawada, AP"
  },
  {
    id: "sricity_cryo",
    companyId: "skyroot",
    name: "Sri City Cryo-Piping & Valves",
    cluster: "Sri City",
    location: "Sri City Domestic Tariff Area, Tirupati District",
    capability: "Energetics",
    capabilityTitle: "Cryogenic Propellant Control Valves",
    certifications: ["ISRO Qualified", "AS9100D"],
    primes: ["Skyroot Aerospace"],
    description: "Engineers cryogenic liquid oxygen (LOX) and liquid natural gas / kerosene main shutoff valves, pressure relief valves, and flex-bellow piping.",
    suppliedComponents: ["LOX Main Shutoff Valves", "Cryo Relief Valves", "Flex Piping Assemblies"],
    facilities: "Liquid Helium Cryogenic Valve Test Rig (-269°C), Mass Spectrometer Helium Leak Detector.",
    contact: "cryo-valves@sricity-tech.in | Sri City, AP"
  },
  {
    id: "visakha_heat",
    companyId: "skyroot",
    name: "Visakha Metal Heat Treatment",
    cluster: "Visakhapatnam",
    location: "Gajuwaka Industrial Zone, Visakhapatnam",
    capability: "Machining",
    capabilityTitle: "Vacuum Heat Treatment & Superalloy Processing",
    certifications: ["Nadcap Heat Treating", "AS9100D"],
    primes: ["Skyroot Aerospace", "Agnikul Cosmos"],
    description: "Performs vacuum solution annealing, age hardening, and stress relieving for Inconel-718 and titanium 6Al-4V rocket motor components.",
    suppliedComponents: ["Inconel Engine Heat Treating", "Titanium Stress Relieving"],
    facilities: "High-Vacuum Bottom-Loading Furnace (1350°C), Argon Gas Quenching System.",
    contact: "heat-treat@visakhametals.co.in | Visakhapatnam, AP"
  },
  {
    id: "rayalaseema_pyro",
    companyId: "skyroot",
    name: "Rayalaseema Pyro-Tech",
    cluster: "Kurnool",
    location: "Donakonda Industrial Corridor, Prakasam / Kurnool Node",
    capability: "Energetics",
    capabilityTitle: "Ordnance Igniter Housings & Flight Termination Brackets",
    certifications: ["PESO Certified", "ISO 9001"],
    primes: ["Skyroot Aerospace"],
    description: "Fabricates hermetically sealed explosive igniter containment shells, flight termination system (FTS) charge brackets, and pyrotechnic actuator bodies.",
    suppliedComponents: ["Igniter Shells", "FTS Charge Brackets", "Pyro Actuator Bodies"],
    facilities: "Explosion-Proof Machining Cells, Radiographic Inspection Chamber, Hermetic Laser Welder.",
    contact: "pyro-tech@rayalaseema-ap.in | Kurnool Node, AP"
  },

  // ==================== DHRUVA SPACE SUPPLIERS (8 UNITS) ====================
  {
    id: "ananth",
    companyId: "dhruva",
    name: "Ananth Technologies AP Avionics Unit",
    cluster: "Tirupati",
    location: "Tirupati Aerospace Park, Tirupati District",
    capability: "Avionics",
    capabilityTitle: "Space Electronics & Harness Assemblies",
    certifications: ["ISRO Certified", "AS9100D"],
    primes: ["Dhruva Space", "Pixxel Space"],
    description: "Assembles space-grade Printed Circuit Board Assemblies (PCBA), solar array wiring harnesses, and power management units for nanosatellite buses.",
    suppliedComponents: ["Space Harnessing", "Flight PCBA", "Payload FPGA Boards", "Power Distribution"],
    facilities: "ISO Class 7 SMT Cleanroom Line, Automated Optical Inspection (AOI), X-Ray BGA Inspection.",
    contact: "tirupati.unit@ananthtech.com | Tirupati, AP"
  },
  {
    id: "tirupati_composite",
    companyId: "dhruva",
    name: "Tirupati Micro-Composite Tech",
    cluster: "Tirupati",
    location: "Gajulamandyam Industrial Hub, Tirupati",
    capability: "Composites",
    capabilityTitle: "CFRP Deployer Arms & Solar Substrates",
    certifications: ["AS9100D"],
    primes: ["Dhruva Space"],
    description: "Fabricates ultra-lightweight carbon-fiber composite deployer housings, hold-down release mechanism (HDRM) brackets, and solar panel substrate structures.",
    suppliedComponents: ["Deployer Enclosures", "HDRM Arms", "Solar Substrate Panels"],
    facilities: "Out-of-Autoclave (OOA) Curing Ovens, Precision CNC Router Table, Dynamic Balance Tester.",
    contact: "info@tirumaticomposites.in | Tirupati, AP"
  },
  {
    id: "resolute",
    companyId: "dhruva",
    name: "Resolute Electronics AP Satellite Unit",
    cluster: "Tirupati",
    location: "Tirupati EMC Hub, Renigunta, Tirupati",
    capability: "Avionics",
    capabilityTitle: "RF Telemetry & Sensor Modules",
    certifications: ["ISO 9001:2015", "IPC-J-STD-001 Space Addendum"],
    primes: ["Dhruva Space", "Pixxel Space"],
    description: "Supplies S-band & UHF telemetry transceivers, magnetorquer coils, star tracker baffles, and attitude determination sensor packages.",
    suppliedComponents: ["S-Band Telemetry", "Magnetorquer Coils", "Star Tracker Baffles"],
    facilities: "RF Anechoic Chamber (0.5 to 18 GHz), Thermal Cycling Oven (-60°C to +125°C).",
    contact: "satellites@resolute-electronics.in | Tirupati, AP"
  },
  {
    id: "rayalaseema",
    companyId: "dhruva",
    name: "Rayalaseema Precision Electro-Optics",
    cluster: "Anantapur",
    location: "Anantapur Industrial Node, Anantapur District",
    capability: "Optics",
    capabilityTitle: "Solar Array Hinges & Thermal Control",
    certifications: ["Precision Tech Certified"],
    primes: ["Dhruva Space", "Pixxel Space"],
    description: "Produces multi-layer insulation (MLI) thermal blankets, spring-actuated solar panel deployment hinges, and cryogenic detector radiators.",
    suppliedComponents: ["MLI Blankets", "Deployment Hinges", "Thermal Radiators"],
    facilities: "Thermal Vacuum Test Chamber, Precision Ultrasonic Blanket Cutting Laser.",
    contact: "electrooptics@rayalaseema-tech.com | Anantapur, AP"
  },
  {
    id: "sricity_pcb",
    companyId: "dhruva",
    name: "Sri City PCB Assemblies",
    cluster: "Sri City",
    location: "Sri City Electronics Manufacturing Cluster",
    capability: "Avionics",
    capabilityTitle: "High-Density SMT Flight Computer Circuit Boards",
    certifications: ["IPC-A-610 Class 3", "AS9100D"],
    primes: ["Dhruva Space"],
    description: "Populates multi-layer polyimide circuit boards for CubeSat flight computers, battery management systems, and beacon transmitters.",
    suppliedComponents: ["Flight Computer PCBAs", "Battery Management Boards"],
    facilities: "Dual-Track High-Speed SMT Line, Vapor Phase Reflow Oven, Flying Probe Tester.",
    contact: "pcb-ap@sricity-emc.in | Sri City, AP"
  },
  {
    id: "chittoor_substrates",
    companyId: "dhruva",
    name: "Chittoor Solar Substrates",
    cluster: "Sri City",
    location: "Chittoor Industrial Area, Chittoor District",
    capability: "Composites",
    capabilityTitle: "Aluminum Honeycomb Solar Array Plates",
    certifications: ["ISO 9001:2015"],
    primes: ["Dhruva Space"],
    description: "Manufactures high-stiffness lightweight aluminum honeycomb core substrate panels faced with Kevlar/CFRP skin for satellite solar arrays.",
    suppliedComponents: ["Honeycomb Solar Plates", "Kevlar Face Sheets"],
    facilities: "Hot Press Laminating System, CNC Edge Sealing Router, Structural Adhesive Curing Room.",
    contact: "substrates@chittoor-ind.ap.gov.in | Chittoor, AP"
  },
  {
    id: "vizag_rf",
    companyId: "dhruva",
    name: "Vizag RF Components",
    cluster: "Visakhapatnam",
    location: "Duvvada SEZ, Visakhapatnam",
    capability: "Avionics",
    capabilityTitle: "Microstrip Patch Antennas & RF Filters",
    certifications: ["ISRO Empaneled", "ISO 9001"],
    primes: ["Dhruva Space"],
    description: "Designs and manufactures space-qualified circularly polarized S-band patch antennas, diplexers, and low-loss RF coaxial cable assemblies.",
    suppliedComponents: ["S-Band Patch Antennas", "RF Diplexers", "Coaxial Assemblies"],
    facilities: "Vector Network Analyzer (40 GHz), Near-Field Antenna Measurement Range.",
    contact: "rf.space@vizag-sez.in | Visakhapatnam, AP"
  },
  {
    id: "tirupati_fasteners",
    companyId: "dhruva",
    name: "Tirupati Structural Fasteners",
    cluster: "Tirupati",
    location: "Renigunta Road Industrial Estate, Tirupati",
    capability: "Machining",
    capabilityTitle: "Non-Magnetic Titanium Micro-Fasteners",
    certifications: ["AS9100D Certified"],
    primes: ["Dhruva Space"],
    description: "Produces high-precision non-magnetic Grade 5 titanium screws, Belleville washers, and helicoil inserts engineered for CubeSat structural frames.",
    suppliedComponents: ["Titanium Micro-Screws", "Helicoil Inserts", "Belleville Washers"],
    facilities: "Swiss-Type CNC Lathes, Optical Thread Comparator, Ultrasonic Cleaning System.",
    contact: "fasteners@tirupati-ind.co.in | Tirupati, AP"
  },

  // ==================== AGNIKUL COSMOS SUPPLIERS (8 UNITS) ====================
  {
    id: "vignan",
    companyId: "agnikul",
    name: "Vignan Precision Additive Machining",
    cluster: "Visakhapatnam",
    location: "Autonagar Defense Cluster, Visakhapatnam",
    capability: "Machining",
    capabilityTitle: "3D Metal Post-Processing & Cryo Valves",
    certifications: ["AS9100D", "ISO 13485"],
    primes: ["Agnikul Cosmos"],
    description: "Provides ultra-precision CNC finishing, EDM wire cutting, and heat treatment for 3D-printed Inconel Agnilet engine chambers and cryogenic fuel valves.",
    suppliedComponents: ["Engine Chamber Finishing", "Cryo Valves", "Pneumatic Manifolds"],
    facilities: "5-Axis Wire EDM, Hot Isostatic Pressing (HIP) Partner Interface, Coordinate Measuring Machine.",
    contact: "vignan.additive@vizagdef.in | Visakhapatnam, AP"
  },
  {
    id: "sigma_agnikul",
    companyId: "agnikul",
    name: "Sigma Advanced Systems (AP Unit)",
    cluster: "Sri City",
    location: "Sri City Industrial Zone, Tirupati District",
    capability: "Machining",
    capabilityTitle: "Gimbal Actuator Frames & Thrust Structure",
    certifications: ["AS9100D", "ISO 9001:2015"],
    primes: ["Agnikul Cosmos", "Skyroot Aerospace"],
    description: "Fabricates high-precision rocket engine gimbal thrust mounts, electromechanical actuator brackets, and propellant line flexible joints.",
    suppliedComponents: ["Gimbal Mounts", "Flex Joints", "Actuator Brackets"],
    facilities: "12x 5-Axis Mazak CNC Mills, CMM Inspection Lab, High-Temp Titanium Heat Treatment Furnace.",
    contact: "ap-aerospace@sigma-sys.com | Sri City, AP"
  },
  {
    id: "godavari_agnikul",
    companyId: "agnikul",
    name: "Godavari Heavy Space Structures",
    cluster: "Vijayawada",
    location: "Jaggaiahpet Industrial Park, NTR District",
    capability: "Machining",
    capabilityTitle: "Mobile Launch Pad & Hydraulic Rigs",
    certifications: ["Heavy Engineering Certified", "ISO 9001"],
    primes: ["Agnikul Cosmos", "Skyroot Aerospace"],
    description: "Manufactures structural components for Agnikul's Dhanush mobile launch pad platform, umbilical erection arms, and flame deflector plates.",
    suppliedComponents: ["Mobile Pad Substructures", "Flame Deflectors", "Erection Arms"],
    facilities: "100-Ton Overhead Crane Bay, Submerged Arc Welding (SAW), Heavy Structural Alignment Laser Tracker.",
    contact: "space.logistics@godavariheavy.in | NTR Dist, AP"
  },
  {
    id: "kalyani_agnikul",
    companyId: "agnikul",
    name: "Kalyani Strategic AP Energetics",
    cluster: "Kurnool",
    location: "Orvakal Industrial Hub, Kurnool District",
    capability: "Energetics",
    capabilityTitle: "Igniter Systems & Pressure Vessels",
    certifications: ["ISO 9001:2015", "PESO Approved"],
    primes: ["Agnikul Cosmos", "Skyroot Aerospace"],
    description: "Supplies electric igniter housings, composite overwrapped pressure vessels (COPV) for helium pressurization, and pneumatic control manifolds.",
    suppliedComponents: ["Helium COPV Tanks", "Igniter Assemblies", "Pneumatic Control Blocks"],
    facilities: "High-Pressure Hydraulic Hydro-Test Rig (1000 Bar), Cryogenic Liquid Nitrogen Flow Test Stand.",
    contact: "defense-ap@kalyanistrategic.com | Kurnool, AP"
  },
  {
    id: "sricity_pneumatics",
    companyId: "agnikul",
    name: "Sri City Hydro-Pneumatics",
    cluster: "Sri City",
    location: "Sri City SEZ Phase-2, Tirupati District",
    capability: "Energetics",
    capabilityTitle: "Helium Regulation & Quick-Disconnect Umbilicals",
    certifications: ["ISO 9001:2015", "AS9100D"],
    primes: ["Agnikul Cosmos"],
    description: "Produces automated pneumatic quick-disconnect fluid couplers and high-flow helium tank pressure regulators for rocket stage pressurization.",
    suppliedComponents: ["Quick-Disconnect Couplers", "Helium Pressure Regulators"],
    facilities: "High-Pressure Gas Test Bench (700 Bar), Cleanroom Assembly Bay.",
    contact: "pneumatics@sricity-hyd.in | Sri City, AP"
  },
  {
    id: "srikakulam_heavy",
    companyId: "agnikul",
    name: "Srikakulam Heavy Steel & Metal",
    cluster: "Visakhapatnam",
    location: "Pydibhimavaram Industrial Node, Srikakulam Cluster",
    capability: "Machining",
    capabilityTitle: "Launch Pad Steel Structural Frames",
    certifications: ["ISO 9001", "EN 1090 Steel Execution"],
    primes: ["Agnikul Cosmos"],
    description: "Fabricates heavy structural steel beams, mobile launch pad base plates, and umbilical tower mast sections for coastal launch operations.",
    suppliedComponents: ["Pad Base Plates", "Umbilical Tower Masts"],
    facilities: "CNC Plasma Steel Cutter (50mm thickness), Heavy Blast Cleaning & Epoxy Coating Plant.",
    contact: "heavy-steel@srikakulam-ind.ap.gov.in | Srikakulam, AP"
  },
  {
    id: "vizag_ndt",
    companyId: "agnikul",
    name: "Visakha Non-Destructive Testing Lab",
    cluster: "Visakhapatnam",
    location: "VSEZ Industrial Zone, Visakhapatnam",
    capability: "Machining",
    capabilityTitle: "X-Ray CT Scanning for 3D Printed Rocket Engines",
    certifications: ["NABL Accredited", "ASNT Level III"],
    primes: ["Agnikul Cosmos"],
    description: "Performs high-resolution Industrial Computed Tomography (CT) 3D scanning and dye penetrant testing on additive manufactured Agnilet engines.",
    suppliedComponents: ["3D Engine CT NDT Scanning", "Dye Penetrant Testing"],
    facilities: "450 kV Industrial CT Scanner, Digital Industrial Radiography System.",
    contact: "ndt-services@vizaglab.co.in | Visakhapatnam, AP"
  },
  {
    id: "tirupati_actuators",
    companyId: "agnikul",
    name: "Tirupati Servo-Actuators",
    cluster: "Tirupati",
    location: "Karakambadi Road Industrial Area, Tirupati",
    capability: "Avionics",
    capabilityTitle: "Thrust Vector Control (TVC) Servo Actuators",
    certifications: ["AS9100D Certified"],
    primes: ["Agnikul Cosmos"],
    description: "Builds high-torque brushless DC electromechanical linear actuators for rocket engine gimbal thrust vector control.",
    suppliedComponents: ["TVC Linear Actuators", "Servo Controller Drives"],
    facilities: "Dynamic Load Test Bench, Thermal Vacuum Chamber (-40°C to +85°C), Resolver Calibration.",
    contact: "actuators@tirupati-servo.in | Tirupati, AP"
  },

  // ==================== PIXXEL SPACE SUPPLIERS (8 UNITS) ====================
  {
    id: "sricity_optics",
    companyId: "pixxel",
    name: "Sri City Precision Optronics & Sensors",
    cluster: "Sri City",
    location: "Sri City Electronics Manufacturing Zone",
    capability: "Optics",
    capabilityTitle: "Hyperspectral Lens Mounts & Optical Benches",
    certifications: ["Optics & Electro-Optics Certified"],
    primes: ["Pixxel Space"],
    description: "Manufactures zero-expansion invar optical barrel housings, carbon-fiber optical bench structures, and high-precision lens positioning rings.",
    suppliedComponents: ["Invar Lens Mounts", "CFRP Optical Benches", "Detector Cold Finger"],
    facilities: "ISO Class 5 Optical Cleanroom, Laser Interferometer Metrology, Optical Alignment Jig.",
    contact: "optronics@sricity-optics.com | Sri City, AP"
  },
  {
    id: "ananth_pixxel",
    companyId: "pixxel",
    name: "Ananth Technologies AP Avionics Unit",
    cluster: "Tirupati",
    location: "Tirupati Aerospace Park, Tirupati District",
    capability: "Avionics",
    capabilityTitle: "Image Processing Board & High-Speed Memory",
    certifications: ["ISRO Certified", "AS9100D"],
    primes: ["Pixxel Space", "Dhruva Space"],
    description: "Assembles high-speed radiation-tolerant FPGA payload processor boards, mass memory storage modules, and high-throughput telemetry transmitters.",
    suppliedComponents: ["Payload FPGA Boards", "Mass Storage Modules", "High-Speed Transmitters"],
    facilities: "ISO Class 7 SMT Cleanroom Line, Automated Optical Inspection (AOI), X-Ray BGA Inspection.",
    contact: "tirupati.unit@ananthtech.com | Tirupati, AP"
  },
  {
    id: "resolute_pixxel",
    companyId: "pixxel",
    name: "Resolute Electronics AP Satellite Unit",
    cluster: "Tirupati",
    location: "Tirupati EMC Hub, Renigunta, Tirupati",
    capability: "Avionics",
    capabilityTitle: "Star Trackers & Attitude Control Sensors",
    certifications: ["ISO 9001:2015", "IPC-J-STD-001 Space Addendum"],
    primes: ["Pixxel Space", "Dhruva Space"],
    description: "Produces star tracker baffle tubes, precision reaction wheel electronics, and fine sun sensor interfaces for pixel-level geo-referencing accuracy.",
    suppliedComponents: ["Star Tracker Baffles", "Reaction Wheel Control", "Fine Sun Sensors"],
    facilities: "RF Anechoic Chamber (0.5 to 18 GHz), Thermal Cycling Oven (-60°C to +125°C).",
    contact: "satellites@resolute-electronics.in | Tirupati, AP"
  },
  {
    id: "rayalaseema_pixxel",
    companyId: "pixxel",
    name: "Rayalaseema Precision Electro-Optics",
    cluster: "Anantapur",
    location: "Anantapur Industrial Node, Anantapur District",
    capability: "Optics",
    capabilityTitle: "Payload Radiators & Thermal Control Panels",
    certifications: ["Precision Tech Certified"],
    primes: ["Pixxel Space", "Dhruva Space"],
    description: "Fabricates high-conductivity copper-graphite thermal cold plates, cryogenic detector radiators, and heat pipe structural brackets for hyperspectral imagers.",
    suppliedComponents: ["Thermal Radiators", "Cold Plates", "Heat Pipe Brackets"],
    facilities: "Thermal Vacuum Test Chamber, Precision Ultrasonic Blanket Cutting Laser.",
    contact: "electrooptics@rayalaseema-tech.com | Anantapur, AP"
  },
  {
    id: "vizag_optics_cleanroom",
    companyId: "pixxel",
    name: "Visakha Electro-Optics Cleanroom",
    cluster: "Visakhapatnam",
    location: "Gambheeram IT & Hardware Park, Visakhapatnam",
    capability: "Optics",
    capabilityTitle: "Vibration-Isolated Optical Alignment Benches",
    certifications: ["ISO Class 5 Cleanroom", "AS9100D"],
    primes: ["Pixxel Space"],
    description: "Provides cleanroom assembly and optical collimator testing for hyperspectral camera telescope payloads.",
    suppliedComponents: ["Optical Alignment Benches", "Collimator Jigs"],
    facilities: "Pneumatic Vibration Isolation Tables, Zygo Laser Interferometer, Spectroradiometer.",
    contact: "cleanroom@vizag-optics.in | Visakhapatnam, AP"
  },
  {
    id: "tirupati_micro_sensors",
    companyId: "pixxel",
    name: "Tirupati Micro-Sensors",
    cluster: "Tirupati",
    location: "Tirupati Electronics Manufacturing Cluster",
    capability: "Avionics",
    capabilityTitle: "Multi-Spectral Sensor Interface Electronics",
    certifications: ["ISO 9001:2015"],
    primes: ["Pixxel Space"],
    description: "Assembles low-noise analog-to-digital converter (ADC) boards and CCD/CMOS focal plane array read-out electronics.",
    suppliedComponents: ["ADC Readout Boards", "Focal Plane Electronics"],
    facilities: "Cleanroom Micro-Bonding Line, Low-Noise Spectrum Analyzer.",
    contact: "micro-sensors@tirupati-emc.ap.gov.in | Tirupati, AP"
  },
  {
    id: "sricity_invar",
    companyId: "pixxel",
    name: "Sri City Invar Alloys",
    cluster: "Sri City",
    location: "Sri City Industrial Zone, Tirupati District",
    capability: "Machining",
    capabilityTitle: "Low-Expansion Invar-36 Optical Brackets",
    certifications: ["AS9100D Certified"],
    primes: ["Pixxel Space"],
    description: "Machines zero thermal expansion Invar-36 structural metering rods, mirror cells, and detector mount brackets to prevent focus drift in orbit.",
    suppliedComponents: ["Invar-36 Metering Rods", "Mirror Cells"],
    facilities: "5-Axis High-Precision CNC Milling, Thermal Expansion Dilatometer Test Lab.",
    contact: "invar@sricity-alloys.co.in | Sri City, AP"
  },
  {
    id: "kakinada_ground",
    companyId: "pixxel",
    name: "Kakinada Ground Station Systems",
    cluster: "Visakhapatnam",
    location: "Kakinada Deepwater Port Industrial Area",
    capability: "Avionics",
    capabilityTitle: "Satellite Ground Station Tracking Antenna Mounts",
    certifications: ["ISO 9001", "ISRO Telemetry Empaneled"],
    primes: ["Pixxel Space"],
    description: "Builds high-precision X-band telemetry tracking antenna pedestals, elevation-over-azimuth rotators, and radome structural housings.",
    suppliedComponents: ["Antenna Tracking Pedestals", "Radome Enclosures"],
    facilities: "3-Axis Antenna Rotator Test Rig, Marine Corrosion-Resistant Coating Bay.",
    contact: "ground-station@kakinada-port.in | Kakinada, AP"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initCompanyTabs();
  renderCompanyPanels();
  renderMasterSuppliers(apSuppliersData);
  initFilterControls();
  initSupplierForm();
  selectMasterplanPin('zone_e');
});

function selectMasterplanPin(pinId) {
  const pinData = masterplanPinsData[pinId];
  const detailsBox = document.getElementById('masterplan-details-box');
  if (!pinData || !detailsBox) return;

  document.querySelectorAll('.map-hotspot').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.legend-btn').forEach(el => el.classList.remove('active'));

  const activePin = document.querySelector(`.map-hotspot[data-id="${pinId}"]`);
  if (activePin) activePin.classList.add('active');

  const activeBtn = document.querySelector(`.legend-btn[onclick*="${pinId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  detailsBox.innerHTML = `
    <div class="details-badge-row">
      <span class="details-zone-tag">${pinData.zone}</span>
      <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--primary);">PIN #${pinData.number}</span>
    </div>
    <h3 class="details-comp-title">${pinData.title}</h3>
    <p class="details-comp-desc">${pinData.desc}</p>
    
    <div class="details-spec-list">
      ${pinData.specs.map(s => `
        <div class="spec-list-item">
          <strong>${s.label}:</strong>
          <span>${s.val}</span>
        </div>
      `).join('')}
    </div>

    <div style="margin-top: auto; border-top: 1px solid var(--border-color); padding-top: 0.85rem; font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
      APIIC Space Park Masterplan &bull; Sriharikota Corridor (SDSC SHAR &lt; 35 km)
    </div>
  `;
}

function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('ap_space_theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
  } else {
    htmlEl.setAttribute('data-theme', 'light');
  }

  themeBtn?.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('ap_space_theme', newTheme);
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
    });
  });
}

function initCompanyTabs() {
  const tabs = document.querySelectorAll('.company-tab');
  const panels = document.querySelectorAll('.company-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const companyKey = tab.getAttribute('data-company');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      if (companyKey) {
        document.getElementById(`panel-${companyKey}`)?.classList.add('active');
      }
    });
  });
}

function renderCompanyPanels() {
  const companyKeys = ['skyroot', 'dhruva', 'agnikul', 'pixxel'];

  companyKeys.forEach(key => {
    const container = document.getElementById(`grid-${key}`);
    if (!container) return;

    const companySuppliers = apSuppliersData.filter(s => s.companyId === key || s.primes.some(p => p.toLowerCase().includes(key)));

    container.innerHTML = companySuppliers.map(s => `
      <div class="supplier-card card" onclick="openSupplierModal('${s.id}')">
        <div class="supplier-header">
          <span class="supplier-location">${s.cluster}</span>
          <span class="cert-badge">${s.certifications[0]}</span>
        </div>
        <h4 class="supplier-name">${s.name}</h4>
        <div class="supplier-spec">${s.capabilityTitle}</div>
        <p class="supplier-desc">${s.description}</p>
        <div class="supplied-items">
          ${s.suppliedComponents.map(item => `<span class="item-tag">${item}</span>`).join('')}
        </div>
        <div class="supplier-footer">
          <span class="supply-status">Empaneled AP Unit</span>
          <button class="btn-link">View Facility Specs &rarr;</button>
        </div>
      </div>
    `).join('');
  });
}

function renderMasterSuppliers(suppliers) {
  const container = document.getElementById('master-suppliers-container');
  if (!container) return;

  if (suppliers.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: 1/-1; padding: 2.5rem; text-align: center; color: var(--text-secondary);">
        <h3>No matching Andhra Pradesh space suppliers found</h3>
        <p style="margin-top: 0.4rem;">Adjust your search query or filter selection.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = suppliers.map(s => `
    <div class="supplier-card card" onclick="openSupplierModal('${s.id}')">
      <div class="supplier-header">
        <span class="supplier-location">${s.cluster}</span>
        <span class="cert-badge">${s.certifications[0]}</span>
      </div>
      <h4 class="supplier-name">${s.name}</h4>
      <div class="supplier-spec">${s.capabilityTitle}</div>
      <p class="supplier-desc">${s.description}</p>
      <div class="supplied-items">
        ${s.suppliedComponents.map(item => `<span class="item-tag">${item}</span>`).join('')}
      </div>
      <div class="supplier-footer">
        <span class="supply-status">Empaneled AP Unit</span>
        <button class="btn-link">View Facility Specs &rarr;</button>
      </div>
    </div>
  `).join('');
}

function initFilterControls() {
  const searchInput = document.getElementById('supplier-search');
  const clusterSelect = document.getElementById('cluster-filter');
  const capSelect = document.getElementById('capability-filter');

  function applyFilters() {
    const query = searchInput?.value.toLowerCase().trim() || '';
    const selectedCluster = clusterSelect?.value || 'all';
    const selectedCap = capSelect?.value || 'all';

    const filtered = apSuppliersData.filter(item => {
      const matchesSearch = query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.cluster.toLowerCase().includes(query) ||
        item.capabilityTitle.toLowerCase().includes(query) ||
        item.suppliedComponents.some(c => c.toLowerCase().includes(query));

      const matchesCluster = selectedCluster === 'all' || item.cluster === selectedCluster;
      const matchesCap = selectedCap === 'all' || item.capability === selectedCap;

      return matchesSearch && matchesCluster && matchesCap;
    });

    renderMasterSuppliers(filtered);
  }

  searchInput?.addEventListener('input', applyFilters);
  clusterSelect?.addEventListener('change', applyFilters);
  capSelect?.addEventListener('change', applyFilters);
}

function openSupplierModal(id) {
  const supplier = apSuppliersData.find(s => s.id === id);
  const modal = document.getElementById('supplier-modal');
  const body = document.getElementById('modal-content-body');

  if (!supplier || !modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="cert-badge" style="margin-bottom: 0.4rem; display: inline-block;">${supplier.certifications.join(' • ')}</span>
      <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-top: 0.1rem;">${supplier.name}</h3>
      <p style="color: var(--primary); font-size: 0.85rem; font-weight: 600; font-family: var(--font-mono);">${supplier.location}</p>
    </div>

    <div style="background: var(--bg-surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1rem;">
      <h4 style="color: var(--text-primary); font-size: 1rem; margin-bottom: 0.3rem;">${supplier.capabilityTitle}</h4>
      <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">${supplier.description}</p>
    </div>

    <div style="margin-bottom: 1rem;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; font-family: var(--font-mono);">Space Primes Supplied:</h4>
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
        ${supplier.primes.map(p => `<span style="background: var(--bg-surface); color: var(--primary); font-weight: 600; padding: 0.25rem 0.6rem; border-radius: var(--radius-sm); font-size: 0.8rem; border: 1px solid var(--border-color);">${p}</span>`).join('')}
      </div>
    </div>

    <div style="margin-bottom: 1rem;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; font-family: var(--font-mono);">Components Supplied:</h4>
      <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
        ${supplier.suppliedComponents.map(c => `<span class="item-tag" style="font-size: 0.8rem; padding: 0.25rem 0.5rem;">${c}</span>`).join('')}
      </div>
    </div>

    <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.9rem; color: var(--text-primary); margin-bottom: 0.25rem;">Facility & Equipment Infrastructure</h4>
      <p style="color: var(--text-secondary); font-size: 0.85rem;">${supplier.facilities}</p>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 0.85rem;">
      <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">${supplier.contact}</span>
      <button class="btn btn-primary" onclick="closeSupplierModal()">Close</button>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeSupplierModal() {
  const modal = document.getElementById('supplier-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

document.getElementById('supplier-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'supplier-modal') closeSupplierModal();
});

function initSupplierForm() {
  const form = document.getElementById('supplier-reg-form');
  const msg = document.getElementById('reg-msg');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!msg) return;

    const companyName = document.getElementById('reg-company')?.value || 'Your Company';
    const trackCode = 'AP-SPACE-2026-' + Math.floor(1000 + Math.random() * 9000);

    msg.innerHTML = `
      <div style="background: #dcfce7; border: 1px solid #059669; padding: 1rem; border-radius: var(--radius-md); color: #064e3b;">
        Application Submitted: <strong>${companyName}</strong><br/>
        <span style="font-size: 0.85rem; color: #047857; font-family: var(--font-mono);">Empanelment Tracking ID: <strong>${trackCode}</strong></span><br/>
        <span style="font-size: 0.82rem; color: #166534; margin-top: 0.3rem; display: block;">An APIIC Space Taskforce officer will contact your unit within 48 business hours.</span>
      </div>
    `;
    form.reset();
  });
}
