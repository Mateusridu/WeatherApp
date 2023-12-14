import {BsSunrise, BsSunset} from "react-icons/bs";
import {GiWindSlap, GiCompass} from "react-icons/gi";
import {WiHumidity} from "react-icons/wi";
import {GiPoisonCloud} from "react-icons/gi";
import {CiTempHigh} from "react-icons/ci";
import {WiHot} from "react-icons/wi";

interface WeatherDeatilsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      feelslike_c: number;
      uv: number; air_quality:{
        co: number;
      };
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDeatils = ({data}:WeatherDeatilsProps) => {
  return (
    <>
      <div className="p-12 h-screen">
        <h1 className="mb-4 text-2xl text-white italic font-bold">Detalhes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Velocidade do vento</h3>
              <h3 className="text-white bg-black/25 rounded-xl mt1"
              aria-label={`Velocidade do vento : ${data.current.wind_kph} km/h`}>{data.current.wind_kph.toFixed()} km/h</h3>
            </div>
            <div>
              <GiWindSlap fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3 >Umidade do Ar</h3>
              <h3 className="text-white bg-black/25 rounded-xl mt-1" aria-label={`Humidity: ${data.current.humidity}%`}>{data.current.humidity} %</h3>
            </div>
            <div>
              <WiHumidity fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Direcao do vento</h3>
              <h3 className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Direcao do vento: ${data.current.wind_dir}`}>{data.current.wind_dir}</h3>
            </div>
            <div>
              <GiCompass fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Nascer do Sol</h3>
              <h3 className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Nascer do sol: ${data.forecast?.forecastday[0]?.astro.sunrise}`}>{data.forecast.forecastday[0].astro.sunrise}</h3>
            </div>
            <div>
              <BsSunrise fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Por do Sol</h3>
              <h3  className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Por do sol: ${data.forecast?.forecastday[0]?.astro.sunset}`}>{data.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <div>
              <BsSunset fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Nivel de Co</h3>
              <h3  className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Quatidade de co: ${data.current.air_quality.co}`}>{data.current.air_quality.co} µg/m3</h3>
            </div>
            <div>
              <GiPoisonCloud fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Sensacao Termica</h3>
              <h3  className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sensacao Termica: ${data.current.feelslike_c}`}>{data.current.feelslike_c} °C</h3>
            </div>
            <div>
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>Indice de UV</h3>
              <h3  className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Indice de Uv: ${data.current.uv}`}>{data.current.uv}</h3>
            </div>
            <div>
              <WiHot fontSize={50} />
            </div>
          </div>
        </div>
      </div>
    </>
    )
};

export default WeatherDeatils;