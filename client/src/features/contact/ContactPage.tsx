import { Typography } from "@mui/material";
import { CounterState } from "./counterReducer";
import { useSelector } from "react-redux";

export default function ContactPage() {
    const {data, title} = useSelector((state: CounterState) => state);
    return (
        <>
            <Typography variant="h2">
                {title}
            </Typography>
            <Typography variant="h2">
                The data is: {data}
            </Typography>
        </>
    )
}