import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import BrushIcon from "@mui/icons-material/Brush";

import { Link } from "react-router-dom";

const pages = [
	{ title: "About Me", link: "/" },
	{ title: "Illustration", link: "/illustrations" },
	{ title: "3D Modelling", link: "/modelling" },
	{ title: "Animation", link: "/animation" },
	{ title: "Contact Me", link: "/" },
];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container
				maxWidth="xl"
				sx={{
					display: "flex",
					flexDirection: { xs: "row", md: "column" },
					alignItems: "center",
					justifyContent: "center",
					paddingTop: "2rem",
				}}
			>
				<Container
					sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
				>
					<BrushIcon sx={{ mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						ADRI
					</Typography>
				</Container>

				<Container sx={{ display: { xs: "flex", md: "none" } }}>
					<BrushIcon sx={{ mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							flexGrow: 0,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						ADRI
					</Typography>
				</Container>

				<Toolbar disableGutters>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							gap: "4rem",
						}}
					>
						{pages.map((page) => (
							<Button
								component={Link}
								to={page.link}
								key={page.title}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page.title}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{pages.map((page) => (
								<MenuItem
									component={Link}
									to={page.link}
									key={page.title}
									onClick={handleCloseNavMenu}
								>
									<Typography sx={{ textAlign: "center" }}>
										{page.title}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
