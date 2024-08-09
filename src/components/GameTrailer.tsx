import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results.sort((a, b) => a.id - b.id).pop();
  return first ? (
    <video src={first.data.max} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
