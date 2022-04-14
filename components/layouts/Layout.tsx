import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui/Navbar";
import { Sidebar } from "../ui/Sidebar";

interface Props {
    title?: string;
}

export const Layout: FC<Props> = ({ title, children }) => {
    return (
        <Box
            sx={{
                flexFlow: 1,
            }}
        >
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Sidebar/> 
            <Box sx={{
                padding:"0px 0px"
            }}>
                {children}
            </Box>
        </Box>
    );
};
