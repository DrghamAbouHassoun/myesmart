export const pricingMartrix = {
  property_types: {
    residential: {
      base_price: 300,
    },
    commercial: {
      base_price: 700,
    },
  },

  size_pricing: {
    price_per_m2: 4,
  },

  room_pricing: {
    bedroom: 150,
    living_room: 200,
    kitchen: 120,
  },

  devices: {
    smart_socket: 40,
    smart_switch: 70,
    motion_sensor: 85,
    door_window_sensor: 55,
    smoke_detector: 120,
    camera: 180,
    thermostat_controller: 260,
    smart_hub: 350,
  },

  installation_complexity: {
    basic: 0.05,
    moderate: 0.1,
    advanced: 0.18,
  },
};
