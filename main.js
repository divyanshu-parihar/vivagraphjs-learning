function run() {
  let graph = Viva.Graph.graph();
  const graphics = Viva.Graph.View.webglGraphics();
  let layout = Viva.Graph.Layout.forceDirected(graph, {
    springLength: 30,
    springCoeff: 0.0008,
    dragCoeff: 0.009,
    gravity: -1.2,
    theta: 1,
  });

  const renderer = Viva.Graph.View.renderer(graph, {
    graphics: graphics,
    layout: layout,
  });
  renderer.run();
  console.log(Userdata);
  Userdata.forEach((el) => {
    graph.addLink(el.person, el.follower);
  });
}
