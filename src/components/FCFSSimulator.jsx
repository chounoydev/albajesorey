import { useState } from "react";

const MAX_TIME_UNIT = 500;

const getInitialProcesses = () => [
  { pid: "P1", arrival: "", burst: "" },
  { pid: "P2", arrival: "", burst: "" },
  { pid: "P3", arrival: "", burst: "" },
];

function fcfs(processes) {
  const sorted = [...processes].sort((a, b) => a.arrival - b.arrival);
  const results = [];
  const timeline = [];
  let time = 0;

  for (const p of sorted) {
    if (p.arrival > time) {
      for (let i = 0; i < p.arrival - time; i++) timeline.push("IDLE");
      time = p.arrival;
    }

    for (let i = 0; i < p.burst; i++) timeline.push(p.pid);

    const completion = time + p.burst;
    results.push({
      ...p,
      completion,
      turnaround: completion - p.arrival,
      waiting: completion - p.arrival - p.burst,
    });

    time = completion;
  }

  return { results, timeline };
}

export default function FCFSSimulator() {
  const [processes, setProcesses] = useState(getInitialProcesses());
  const [results, setResults] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [error, setError] = useState("");

  const update = (i, field, val) => {
    const copy = [...processes];
    if (/^\d*$/.test(val)) copy[i][field] = val === "" ? "" : Number(val);
    setProcesses(copy);
  };

  const simulate = () => {
    setError("");

    const valid = [];
    for (const p of processes) {
      if (p.arrival === "" || p.burst === "")
        return setError(`All fields required for ${p.pid}`);
      valid.push({ ...p, arrival: Number(p.arrival), burst: Number(p.burst) });
    }

    const out = fcfs(valid);
    setResults(out.results);
    setTimeline(out.timeline);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#073B4C]">
        FCFS CPU Scheduling Simulator
      </h1>

      {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>}

      {/* INPUT TABLE */}
      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">PID</th>
            <th className="p-2 border">Arrival</th>
            <th className="p-2 border">Burst</th>
          </tr>
        </thead>

        <tbody>
          {processes.map((p, i) => (
            <tr key={i}>
              <td className="p-2 border text-center">{p.pid}</td>
              <td className="p-2 border text-center">
                <input
                  className="w-full text-center border rounded px-2 py-1"
                  value={p.arrival}
                  onChange={(e) => update(i, "arrival", e.target.value)}
                />
              </td>
              <td className="p-2 border text-center">
                <input
                  className="w-full text-center border rounded px-2 py-1"
                  value={p.burst}
                  onChange={(e) => update(i, "burst", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={simulate}
        className="w-full bg-[#073B4C] text-white px-4 py-2 rounded-full hover:bg-[#055063] transition font-bold"
      >
        Simulate
      </button>

      {results && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3 text-[#073B4C]">
            Results
          </h2>

          <table className="w-full border mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">PID</th>
                <th className="p-2 border">Arrival</th>
                <th className="p-2 border">Burst</th>
                <th className="p-2 border">Completion</th>
                <th className="p-2 border">Turnaround</th>
                <th className="p-2 border">Waiting</th>
              </tr>
            </thead>
            <tbody>
              {results.map((p) => (
                <tr key={p.pid}>
                  <td className="p-2 border text-center">{p.pid}</td>
                  <td className="p-2 border text-center">{p.arrival}</td>
                  <td className="p-2 border text-center">{p.burst}</td>
                  <td className="p-2 border text-center">{p.completion}</td>
                  <td className="p-2 border text-center">{p.turnaround}</td>
                  <td className="p-2 border text-center">{p.waiting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
