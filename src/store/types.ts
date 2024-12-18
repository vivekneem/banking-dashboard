import { DashboardState } from "../pages/Dashboard/types";
import { UserProfileState } from "../pages/Settings/types";

export interface RootState {
  dashboard: DashboardState;
  user: UserProfileState;
}
