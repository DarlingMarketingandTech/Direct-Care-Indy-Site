# Vercel Environment Variables Cleanup Guide

## Issue
The `vercel-env-push` failed due to:
1. RAPIDAPI_KEY having `\r\n` line ending issues
2. Accidental `NO` variable that needs to be removed

## Manual Cleanup Steps

Run these commands in your terminal to clean up the Vercel environment variables:

### 1. Remove the broken RAPIDAPI_KEY
```powershell
vercel env rm RAPIDAPI_KEY production -y
```

### 2. Add the clean RAPIDAPI_KEY (paste carefully without trailing spaces)
```powershell
vercel env add RAPIDAPI_KEY production
# When prompted, paste your RAPIDAPI_KEY value
```

### 3. Remove the accidental NO variable
```powershell
vercel env rm NO production -y
```

### 4. Verify all required variables are set

**Production Environment:**
- ✅ `RESEND_API_KEY` (already set)
- ✅ `NOTIFICATION_EMAIL` (already set)
- ✅ `NEXT_PUBLIC_OPENWEATHER_API_KEY` (already set)
- ✅ `VERCEL_OIDC_TOKEN` (already set)
- ⚠️ `RAPIDAPI_KEY` (needs to be re-added cleanly)

**Preview & Development:**
- Make sure `NEXT_PUBLIC_OPENWEATHER_API_KEY` is set in all environments
- Make sure `RAPIDAPI_KEY` is set in Preview and Development if needed

## Alternative: Use Vercel Dashboard

If command line is having issues, you can also:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Delete `RAPIDAPI_KEY` from Production
3. Add it again with the correct value (no trailing spaces/newlines)
4. Delete the `NO` variable if it exists

## Verification

After cleanup, verify with:
```powershell
vercel env ls
```

You should see all your variables listed correctly without the `NO` variable.

