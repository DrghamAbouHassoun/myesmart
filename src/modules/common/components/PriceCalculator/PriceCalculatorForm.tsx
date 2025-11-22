"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  PriceCalculatorSchema,
  PriceCalculatorSchemaType,
} from "../../schemas/PriceCalculatorSchema";
import { pricingMartrix } from "@/data/pricing";
import ResultModal from "./ResultModal";
import { useContext, useEffect } from "react";
import { PriceModalContext } from "../../context/PriceModalProvider";

const PriceCalculatorForm = () => {
  const { setIsOpen, setTotalPrice } = useContext(PriceModalContext);
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
    setTotalPrice(totalPrice);
    setIsOpen(true);
  };

  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);
  return (
    <>
      <ResultModal />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 shadow-2xl p-4 rounded-lg py-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="property_type" className="text-gray-500">Property Type</label>
            <select
              id="property_type"
              {...register("property_type")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
            {errors.property_type && (
              <p className="text-red-500">{errors.property_type.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="size" className="text-gray-500">Size</label>
            <input
              type="number"
              id="size"
              {...register("size")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.size && (
              <p className="text-red-500">{errors.size.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="bedrooms" className="text-gray-500">Bedrooms</label>
            <input
              type="number"
              id="bedrooms"
              {...register("bedrooms")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.bedrooms && (
              <p className="text-red-500">{errors.bedrooms.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="living_rooms" className="text-gray-500">Living Rooms</label>
            <input
              type="number"
              id="living_rooms"
              {...register("living_rooms")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.living_rooms && (
              <p className="text-red-500">{errors.living_rooms.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="kitchens" className="text-gray-500">Kitchens</label>
            <input
              type="number"
              id="kitchens"
              {...register("kitchens")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.kitchens && (
              <p className="text-red-500">{errors.kitchens.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="smart_socket" className="text-gray-500">Smart Socket</label>
            <input
              type="number"
              id="smart_socket"
              {...register("smart_socket")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.smart_socket && (
              <p className="text-red-500">{errors.smart_socket.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="smart_switch" className="text-gray-500">Smart Switch</label>
            <input
              type="number"
              id="smart_switch"
              {...register("smart_switch")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.smart_switch && (
              <p className="text-red-500">{errors.smart_switch.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="motion_sensor" className="text-gray-500">Motion Sensor</label>
            <input
              type="number"
              id="motion_sensor"
              {...register("motion_sensor")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.motion_sensor && (
              <p className="text-red-500">{errors.motion_sensor.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="door_window_sensor" className="text-gray-500">Door Window Sensor</label>
            <input
              type="number"
              id="door_window_sensor"
              {...register("door_window_sensor")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.door_window_sensor && (
              <p className="text-red-500">
                {errors.door_window_sensor.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="smoke_detector" className="text-gray-500">Smoke Detector</label>
            <input
              type="number"
              id="smoke_detector"
              {...register("smoke_detector")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.smoke_detector && (
              <p className="text-red-500">{errors.smoke_detector.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="camera" className="text-gray-500">Camera</label>
            <input
              type="number"
              id="camera"
              {...register("camera")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.camera && (
              <p className="text-red-500">{errors.camera.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="themostat_controller" className="text-gray-500">Themostat Controller</label>
            <input
              type="number"
              id="themostat_controller"
              {...register("themostat_controller")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.themostat_controller && (
              <p className="text-red-500">
                {errors.themostat_controller.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="smart_hub" className="text-gray-500">Smart Hub</label>
            <input
              type="number"
              id="smart_hub"
              {...register("smart_hub")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            />
            {errors.smart_hub && (
              <p className="text-red-500">{errors.smart_hub.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="installation_complexity" className="text-gray-500">
              Installation Complexity
            </label>
            <select
              id="installation_complexity"
              {...register("installation_complexity")}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-500 focus:shadow-md focus:shadow-primary-shadow focus:border-primary transition-all duration-300 outline-none"
            >
              <option value="basic">Basic</option>
              <option value="moderate">Moderate</option>
              <option value="advanced">Advanced</option>
            </select>
            {errors.installation_complexity && (
              <p className="text-red-500">
                {errors.installation_complexity.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-white hover:bg-primary/80 cursor-pointer mt-4 transition-all duration-300 h-12 px-4 py-2 rounded-md"
        >
          Calculate
        </button>
      </form>
    </>
  );
};

export default PriceCalculatorForm;
