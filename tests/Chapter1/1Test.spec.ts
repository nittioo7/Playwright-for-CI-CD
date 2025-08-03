import {test, expect} from '@playwright/test'

test('frist test',async({page})=>{
    await page.goto("https://www.google.com");
    
})