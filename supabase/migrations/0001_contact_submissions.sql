-- Footcandle Film Festival — contact form storage
-- Run this once in the Supabase SQL Editor (Dashboard → SQL Editor → New query).

create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  message     text not null
);

-- Enable Row Level Security. The website writes via the service_role key
-- (server-side only), which bypasses RLS, so no public policies are needed.
-- With RLS on and no policies, the anon/public key cannot read or write —
-- submissions stay private to the project.
alter table public.contact_submissions enable row level security;
