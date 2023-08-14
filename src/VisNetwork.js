import React, { useEffect, useRef } from 'react';

import { Network } from "vis-network/standalone/esm/vis-network";
// import { DataSet } from "vis-data/peer/esm/vis-data"

import nodes from "./data/node_data.json";
import edges from "./data/edge_data.json";

const VisNetwork = () => {
    const domNode = useRef(null);
    // A reference to the vis network instance
    const network = useRef(null);
  
    const data = {nodes, edges};
  
    const options = {
      nodes: {
        shape: "dot",
        scaling: {
          min: 10,
          max: 30,
          label: {
            min: 8,
            max: 30,
            drawThreshold: 12,
            maxVisible: 20,
          },
        },
        font: {
          size: 12,
          face: "Tahoma",
        },
      },
      edges: {
        width: 0.15,
        color: { inherit: "from" },
        smooth: {
          type: "continuous",
        },
        arrows: "to"
      },
      physics: false,
      interaction: {
        tooltipDelay: 200,
        hideEdgesOnDrag: true,
        hideEdgesOnZoom: true,
      },
    };
  
    useEffect(
      () => {
        if (domNode.current) {
          network.current = new Network(domNode.current, data, options);
        }
      }, [domNode, network, data, options]
    );
      
    console.log(domNode)
    return (
      <div id="mynetwork" ref = { domNode } />
    );
}

export default VisNetwork;
