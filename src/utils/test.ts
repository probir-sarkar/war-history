import warData from "../data/output.json";
export function isYearInRange(year: number, yearRangeString: string | number): boolean {
    if (typeof yearRangeString === "number") {
        // Direct comparison if yearRangeString is a number
        return year === yearRangeString;
    }
    if (typeof yearRangeString !== "string") {
        // Invalid input, return false
        return false;
    }
    const [startYear, endYear] = yearRangeString.split('-').map(Number);
    // Range check
    return year >= startYear && year <= endYear;
}
 export interface Battle {
    ID: string;
    Country: string;
    Latitude: number;
    Longitude: number;
    Page: number;
    Battle: string | number;
    Year: string;
    Participants: string;
    War: string;
    Winner: string;
    Loser: string;
    Participant_1: string;
    Participant_2: string;
    Lehmann_Zhukov_Scale: number | string;
    Theatre: string;
    Polygon: string;
    Massacre: string;
    Alternative_Sources_Consulted: string;
    Infered_Scale: string;
    Minor: string;
}

const warDataArray: Battle[] = warData as Battle[];

export function getBattlesByYear(year:any):Battle[] {
    if(!year) return [];
    return warDataArray.filter((battle:Battle) => isYearInRange(year, battle.Year));
}