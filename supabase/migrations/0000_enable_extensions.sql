-- 0000_enable_extensions.sql
-- Ensure UUID generation extensions are available for all environments.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;