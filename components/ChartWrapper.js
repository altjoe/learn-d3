import React, { useRef, useState, useEffect } from "react";
import Chart from "../D3/Chart";

export default function ChartWrapper {
    const chartArea = useRef(null);
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (!chart) {
            setChart(new Chart(chartArea.current));
        } else {
            chart.update()
        }
    }, [chart])

    return <div className="chart-area" ref={chartArea}></div>;
}