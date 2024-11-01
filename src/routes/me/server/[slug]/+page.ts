export async function load({ params }) {
  return {
    serverId: params.slug
  };
}