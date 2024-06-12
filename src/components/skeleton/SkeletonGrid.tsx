import { Skeleton } from "@mui/material"
import Grid from "@mui/material/Grid"


type TProp = {
  lg?: number;
  md?: number;
  xs?: number;
  height?: number;
  xl?: number
}

const SkeletonGrid = ({ md, height = 150, lg, xs, xl }: TProp) => {
  return (
    <Grid item xs={xs} lg={lg} md={md} xl={xl}  >
      <Skeleton variant="rectangular" height={height} />
      <Skeleton />
      <Skeleton width="60%" />
    </Grid>
  )
}
export default SkeletonGrid