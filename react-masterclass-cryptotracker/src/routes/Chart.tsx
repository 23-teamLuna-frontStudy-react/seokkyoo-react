import { useQuery } from "react-query";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isdarkAtom } from "../atoms";

interface ICoinInfo {
  coinId: string;
  coinName?: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const isDark = useRecoilValue(isdarkAtom);

  const params = useParams();
  // console.log(params);
  // const { state } = useLocation();
  // const data = state as ChartProps;

  const contextData = useOutletContext<ICoinInfo>();
  // 비구조화 할당으로 하려면 이렇게
  // const { coinId, coinName  } = useOutletContext<ICoinId>();
  // console.log(contextData.coinName);

  const { isLoading, data: chartData } = useQuery<IHistorical[]>(
    ["ohlcv", params.coinId],
    () => fetchCoinHistory(params.coinId),
    {
      refetchInterval: 10000,
    }
  );

  // 노마드코더 API는 가격 데이터가 있다면 배열을 응답하지만, 없다면 배열이 아닌 다른 형식으로 응답한다.
  // 따라서 배열임을 확인하는 방식으로 이에 대응할 수 있다. 좋은 방법은 아닌 것 같다만...킁
  if (!Array.isArray(chartData)) {
    return (
      <>
        <>
          {`Error: ${
            contextData.coinName ? contextData.coinName : params.coinId
          } 암호화폐의 가격 데이터가 없거나 로딩 중이어서 차트를 불러올 수 없습니다.`}
        </>
        <br />
        <br />
        (로딩 중일 경우 잠시 기다리면 차트가 나타납니다.)
        <></>
      </>
    );
  }
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            { name: "Price", data: chartData?.map((price) => price.close) },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                datetimeFormatter: { month: "mmm 'yy" },
              },
              type: "datetime",
              categories: chartData?.map((price) =>
                new Date(price.time_close * 1000).toUTCString()
              ),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
