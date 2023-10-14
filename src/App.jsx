import React from "react";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import MiniDrawer from "./components/MiniDrawer";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./styles/style.css";
import Card from "./components/Card";
import MonthChart from "./components/MonthChart";
import CustomerChart from "./components/CustomerChart";

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#040440",
            light: "#5a32ea",
          },
          secondary: {
            main: "#cb3dae",
            light: "#e69ed3",
          },
          common: {
            black: "#030303",
            white: "#f2f1fa",
            green: "#00a849",
            lightGreen: "#dcffeb",
            purple: "#a200ff",
            lightPurple: "#e7dbff",
            blue: "#0b5cc1",
            lightBlue: "#cdf3ff",
            red: "#d7000c",
            lightRed: "#ffaed7",
          },
        },
        typography: {
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeightLight: 300,
          fontWeightBold: 700,
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#e4e7ed" }}>
        <MiniDrawer>
          <div className="card-overall-container">
            <Card
              title="Earning"
              money="$198k"
              percent="37.8%"
              period="this month"
              icon={MonetizationOnIcon}
              fontColor="black" // Custom font color
              percentColor="#05a138"
              periodTextColor="black"
              iconColor="#00a94a"
              iconBgColor="rgb(223, 255, 244)"
            />

            <Card
              title="Orders"
              money="$2.4k"
              percent="2%"
              period="this month"
              icon={AccountBalanceWalletIcon}
              fontColor="black" // Custom font color
              percentColor="#d82e6a"
              periodTextColor="black"
              iconColor="#a714fe"
              iconBgColor="#e7dbff"
            />
            <Card
              title="Balance"
              money="$2.4k"
              percent="2%"
              period="this month"
              icon={AccountBalanceIcon}
              fontColor="black" // Custom font color
              percentColor="#d82e6a"
              periodTextColor="black"
              iconColor="#0a5bc0"
              iconBgColor="#cdf3ff"
            />
            <Card
              title=" Total Sales"
              money="$89k"
              percent="11%"
              period="this week"
              icon={ShoppingBasketIcon}
              fontColor="black" // Custom font color
              percentColor="#05a138"
              periodTextColor="black"
              iconColor="purple"
              iconBgColor="#ffaed7"
            />
          </div>
          <div className="chart-container">
            <MonthChart />
            <CustomerChart />
          </div>
        </MiniDrawer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
