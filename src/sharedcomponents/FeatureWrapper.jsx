import React from "react";
import "../css/Features.css";
import { getFeature } from "./Features";
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  console.log(params);
  const feature = getFeature(params);
  return { feature };
}
export default function FeatureWrapper() {
  const { feature } = useLoaderData();
  return <div className="feature-wrapper">{feature}</div>;
}
