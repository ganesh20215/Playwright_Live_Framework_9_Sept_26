import * as dotenv from "dotenv";
import * as path from "path";


const envName = process.env.ENV || 'dev';

// Load env file from project root
dotenv.config({
    path: path.resolve(process.cwd(), `.env.${envName}`)
});

export interface EnviornmentConfig{
    env : string,
    baseUrl : string;
    retries : number;
}

export const config : EnviornmentConfig = {
    env : envName,
    baseUrl:  process.env.baseUrl || 'https://www.camposcoffee.com/',
    retries : Number(process.env.retries ?? 0),
}