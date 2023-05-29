# Supabase

Connect Supabase project

```bash
supabase login
supabase link --project-ref $PROJECT_ID
```

pull remote changes before making local schema changes

```bash
supabase db remote commit
```

Auto schema diff after making schema changes in local studio

```bash
supabase db diff -f migration_name
```

Generate types

```bash
supabase gen types typescript --local > ./types/supabase.ts
```

Start supabase (make sure docker is running and supabase CLI installed)

```bash
supabase start
```

Stop supabase

```bash
supabase stop
```
