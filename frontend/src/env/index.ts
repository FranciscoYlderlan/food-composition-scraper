import { z } from 'zod'

const envSchema = z.object({
  API_URL: z.string().url(),
})

// validation
const env_ = envSchema.safeParse(process.env)

if (env_.success === false) {
  console.error('❌ Invalid environment variables', env_.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = env_.data
