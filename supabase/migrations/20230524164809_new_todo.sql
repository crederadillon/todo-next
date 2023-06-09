create table "public"."todo" (
    "id" bigint generated by default as identity not null,
    "text" character varying not null,
    "complete" boolean not null default false,
    "created_at" timestamp with time zone not null default now()
);


CREATE UNIQUE INDEX todo_pkey ON public.todo USING btree (id);

alter table "public"."todo" add constraint "todo_pkey" PRIMARY KEY using index "todo_pkey";


