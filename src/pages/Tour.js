import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import IconBreadcrumbs from "../components/BreadCrums";
import QuiltedImageList from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordion";
import TransitionsModal from "../components/Modal";

export default function Tour() {
  return (
    <Container>
      <IconBreadcrumbs />
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in las vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
          alt=""
          height={325}
          width={650}
        />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={1}>
          Frencuently asked questions
        </Typography>
        <ControlledAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <TransitionsModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
