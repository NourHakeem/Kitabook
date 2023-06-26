import React, { useState, useEffect } from "react";
import "./widgets.css";

import WidgetCard from "./widgetCard";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  
  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
}
