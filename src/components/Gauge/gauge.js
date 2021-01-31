import React, { useEffect, useState } from 'react';
import Gauge from './index';

const GaugeComponent = ({ percent }) => {
  const [gaugeValue, setGaugeValue] = useState(0);

  const calculateGaugePercent = () => {
    const percentGauge = (percent * 90) / 100;
    return percentGauge;
  };

  useEffect(() => {
    const percentGauge = calculateGaugePercent();
    if (percentGauge !== 0) {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setGaugeValue(count);
        if (count === Math.round(percentGauge)) {
          clearInterval(interval);
        }
      }, 10);
    }
  }, []);

  return (
    <Gauge>
      <Gauge.Circle>
        <Gauge.Circle.Radius cx="75" cy="75" r="70" />
        <Gauge.Circle.Radius percent={gaugeValue} cx="75" cy="75" r="70" />
      </Gauge.Circle>
      <Gauge.Number>
        <Gauge.Number.H2>
          {percent}
          <Gauge.Number.Span>
            %
          </Gauge.Number.Span>
        </Gauge.Number.H2>
      </Gauge.Number>
    </Gauge>

  );
};

export default React.memo(GaugeComponent);
