import { z } from "zod";

export const PriceCalculatorSchema = z.object({
    property_type: z.enum(["residential", "commercial"]),
    size: z.string().min(1, { message: "Size is required" }),
    bedrooms: z.string().min(1, { message: "Bedrooms is required" }),
    living_rooms: z.string().min(1, { message: "Living Rooms is required" }),
    kitchens: z.string().min(1, { message: "Kitchens is required" }),
    smart_socket: z.string().min(1, { message: "Smart Socket is required" }),
    smart_switch: z.string().min(1, { message: "Smart Switch is required" }),
    motion_sensor: z.string().min(1, { message: "Motion Sensor is required" }),
    door_window_sensor: z.string().min(1, { message: "Door Window Sensor is required" }),
    smoke_detector: z.string().min(1, { message: "Smoke Detector is required" }),
    camera: z.string().min(1, { message: "Camera is required" }),
    themostat_controller: z.string().min(1, { message: "Themostat Controller is required" }),
    smart_hub: z.string().min(1, { message: "Smart Hub is required" }),
    installation_complexity: z.enum(["basic", "moderate", "advanced"]),
});

export type PriceCalculatorSchemaType = z.infer<typeof PriceCalculatorSchema>;