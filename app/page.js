import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-md font-bold leading-6 text-gray-900'>
            Selamat datang, masukan email dan password untuk masuk
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <Label htmlFor='email'>Alamat Email</Label>
              <div className='mt-2'>
                <Input type='email' id='email' placeholder='xxxx@domain.com' />
              </div>
            </div>
            <div>
              <div className='flex items-center justify-between'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <div className='mt-2'>
                <Input type='password' id='password' />
              </div>
            </div>

            <div>
              <Button type='submit' className='w-full'>
                Masuk
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
