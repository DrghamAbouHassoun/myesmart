"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  PriceCalculatorSchema,
  PriceCalculatorSchemaType,
} from "../../schemas/PriceCalculatorSchema";
import { pricingMartrix } from "@/data/pricing";

const PriceCalculatorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PriceCalculatorSchemaType>({
    resolver: zodResolver(PriceCalculatorSchema),
  });

  const onSubmit = (values: PriceCalculatorSchemaType) => {
    console.log("Values: ", values);
    const propertyPrice =
      pricingMartrix.property_types[values.property_type].base_price;
    const sizePrice =
      pricingMartrix.size_pricing.price_per_m2 * parseFloat(values.size);
    const bedroomsPrice =
      pricingMartrix.room_pricing.bedroom * parseFloat(values.bedrooms);
    const livingRoomsPrice =
      pricingMartrix.room_pricing.living_room * parseFloat(values.living_rooms);
    const kitchensPrice =
      pricingMartrix.room_pricing.kitchen * parseFloat(values.kitchens);
    const smartSocketPrice =
      pricingMartrix.devices.smart_socket * parseFloat(values.smart_socket);
    const smartSwitchPrice =
      pricingMartrix.devices.smart_switch * parseFloat(values.smart_switch);
    const motionSensorPrice =
      pricingMartrix.devices.motion_sensor * parseFloat(values.motion_sensor);
    const doorWindowSensorPrice =
      pricingMartrix.devices.door_window_sensor *
      parseFloat(values.door_window_sensor);
    const smokeDetectorPrice =
      pricingMartrix.devices.smoke_detector * parseFloat(values.smoke_detector);
    const cameraPrice =
      pricingMartrix.devices.camera * parseFloat(values.camera);
    const themostatControllerPrice =
      pricingMartrix.devices.thermostat_controller *
      parseFloat(values.themostat_controller);
    const smartHubPrice =
      pricingMartrix.devices.smart_hub * parseFloat(values.smart_hub);
    const totalPrice =
      propertyPrice * sizePrice +
      bedroomsPrice +
      livingRoomsPrice +
      kitchensPrice +
      smartSocketPrice +
      smartSwitchPrice +
      motionSensorPrice +
      doorWindowSensorPrice +
      smokeDetectorPrice +
      cameraPrice +
      themostatControllerPrice +
      smartHubPrice;

    console.log("Total Price: ", totalPrice);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 shadow-2xl p-4 rounded-lg"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="property_type">Property Type</label>
          <select
            id="property_type"
            {...register("property_type")}
            className="w-full p-2 rounded-md "
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="size">Size</label>
          <input
            type="number"
            id="size"
            {...register("size")}
            className="w-full p-2 rounded-md "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            {...register("bedrooms")}
            className="w-full p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="living_rooms">Living Rooms</label>
          <input
            type="number"
            id="living_rooms"
            {...register("living_rooms")}
            className="w-full p-2 rounded-md "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="kitchens">Kitchens</label>
          <input
            type="number"
            id="kitchens"
            {...register("kitchens")}
            className="w-full p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="smart_socket">Smart Socket</label>
          <input
            type="number"
            id="smart_socket"
            {...register("smart_socket")}
            className="w-full p-2 rounded-md "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="smart_switch">Smart Switch</label>
          <input
            type="number"
            id="smart_switch"
            {...register("smart_switch")}
            className="w-full p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="motion_sensor">Motion Sensor</label>
          <input
            type="number"
            id="motion_sensor"
            {...register("motion_sensor")}
            className="w-full p-2 rounded-md "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="door_window_sensor">Door Window Sensor</label>
          <input
            type="number"
            id="door_window_sensor"
            {...register("door_window_sensor")}
            className="w-full p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="smoke_detector">Smoke Detector</label>
          <input
            type="number"
            id="smoke_detector"
            {...register("smoke_detector")}
            className="w-full p-2 rounded-md "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="camera">Camera</label>
          <input
            type="number"
            id="camera"
            {...register("camera")}
            className="w-full p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="themostat_controller">Themostat Controller</label>
          <input
            type="number"
            id="themostat_controller"
            {...register("themostat_controller")}
            className="w-full p-2 rounded-md "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="smart_hub">Smart Hub</label>
          <input
            type="number"
            id="smart_hub"
            {...register("smart_hub")}
            className="w-full p-2 rounded-md "
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="installation_complexity">
            Installation Complexity
          </label>
          <select
            id="installation_complexity"
            {...register("installation_complexity")}
          >
            <option value="basic">Basic</option>
            <option value="moderate">Moderate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-white hover:bg-primary/80 transition-all duration-300 h-12 px-4 py-2 rounded-md"
      >
        Calculate
      </button>
    </form>
  );
};

export default PriceCalculatorForm;
