import {Driver} from "./types/common.types";

export function getDriverName(driver: Driver) {
    return `${driver.givenName} ${driver.familyName}`;
}