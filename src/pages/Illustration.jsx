import React from "react";
import { ImageList } from "@mui/material";
import ResponsiveAppBar from "./../components/ResponsiveAppBar";
import ImageCard from "./../components/ImageCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const images = import.meta.glob("/images/*.{png,jpg,jpeg,svg}", {
	eager: true,
});

function Illustration() {
	const theme = useTheme();

	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isLarge = useMediaQuery(theme.breakpoints.between("md", "lg"));

	let cols;
	if (isSmall) {
		cols = 1;
	} else if (isMedium) {
		cols = 2;
	} else if (isLarge) {
		cols = 3;
	} else {
		cols = 4;
	}

	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<ImageList
				variant="masonry"
				cols={cols}
				gap={28}
				sx={{ paddingInline: "5rem", paddingTop: "2rem" }}
			>
				{Object.keys(images).map((image, index) => ImageCard(image, index))}
			</ImageList>
		</div>
	);
}

export default Illustration;
