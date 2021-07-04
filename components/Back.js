import { useRouter } from 'next/router'

const Back = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default Back
